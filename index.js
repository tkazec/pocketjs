(function(){
	var cache = {};
	
	this.tmpl = function tmpl(str, data){
		var fn = !/[^a-z0-9_\-]/.test(str) ?
			cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML.trim()) :
			
			new Function("obj",
				"var p=[];p.push('" +
				
				str
					.replace(/[\r\t\n]/g, " ")
					.replace(/<%\?%>/g, "<% } %>")
					.replace(/<%\?(.+?)%>/g, "<% if ($1) { %>")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t==(.+?)%>/g, "',$('<div/>').text($1).html(),'")
					.replace(/\t=(.+?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'")
				
				+ "');return p.join('');"
			);
		
		return data ? fn(data) : fn;
	};
})();

(function($, tree){

/*** nav list ***/
var $navlist = (function build(parent, path){
	var $ul = $("<ul/>"), path = path ? path + "/" : "";
	
	$.each(parent.kids, function(name, kid){
		var hasKids = kid.kids, $li = $("<li/>");
		
		$("<a/>", {
			Class: "nav-list-" + (hasKids ? "parent" : "item"),
			href: "#" + encodeURIComponent(path + name),
			html: (hasKids ? "<a></a>" : "") + name
		}).appendTo($li);
		
		hasKids && $li.append(build(kid, path + name));
		
		$li.appendTo($ul);
	});
	
	return $ul;
})(tree).attr("id", "nav-list").appendTo("#nav");

$("a", $navlist).children("a").click(function(){
	$(this).parent().toggleClass("nav-list-parent-open");
	
	return false;
});


/*** loading ***/
$(window).bind("hashchange", function(){
	var hash = decodeURIComponent(window.location.hash), item = tree, crumbs = [];
	
	if (!hash.length) { return; }
	
	$("a", $navlist).each(function(){
		var $this = $(this), href = decodeURIComponent($this.attr("href"));
		
		if (hash.indexOf(href) === 0) {
			$this.children().length && $this.addClass("nav-list-parent-open");
			
			href === hash && $(".nav-list-selected", $navlist).removeClass("nav-list-selected") && $this.addClass("nav-list-selected");
		}
	});
	
	$navlist.children().css("margin-right", $navlist[0].scrollHeight > $navlist.height() ? 5 : 0);
	
	hash.substring(1).split("/").forEach(function(part){
		item = item.kids[part];
		item.name = part;
		crumbs.unshift(item);
	});
	
	$("#main").html(display(crumbs[1], crumbs[0]));
}).trigger("hashchange");


/*** displaying ***/
function html(parent, item) {
	var syntax = "", argdesc = "";
	
	if (item.html) { return item.html; }
	
	!tree[parent.name] && (syntax += "<a>" + parent.name.replace("()", "") + "</a>");
	
	syntax += item.name.replace(/(#|\.)(\w+)/, "$1<a>$2</a>").replace("()", function(){
		return "(" + item.args.map(function(arg){
			argdesc += tmpl("tmpl-argdesc", arg);
			
			return tmpl("tmpl-arg", arg);
		}).join(", ") + ")";
	});
	
	syntax += ' &#x2192; <span class="s-rtype">' + $("<div/>").text(item.returns).html() + '</span>';
	
	return item.html = $("<section />").append(
		"<pre><code>" + syntax + "</code></pre>",
		"<p>" + item.desc + " <a>more</a> ∙ <a>bug</a></p>",
		argdesc && "<dl>" + argdesc + "</dl>"
	);
}

function display(parent, item) {
	var out = html(parent, item);
	
	$.each(item.kids || {}, function(name, kid){
		out += html(item, kid);
	});
	
	return out;
}

})(jQuery, tree);