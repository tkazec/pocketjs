(function($, tree){

/*** nav list ***/
var $navlist = (function build(parent, path){
	var $ul = $("<ul/>"), path = path ? path + "/" : "";
	
	$.each(parent.kids, function(name, kid){
		var hasKids = kid.kids, $li = $("<li/>"), kpath = path + name, ekpath = "#" + encodeURIComponent(kpath);
		
		$("<a/>", {
			Class: "nav-list-" + (hasKids ? "parent" : "item"),
			href: ekpath,
			html: (hasKids ? "<a></a>" : "") + name
		}).appendTo($li);
		
		hasKids && $li.append(build(kid, path + name));
		
		$li.appendTo($ul);
		
		kid.name = name;
		kid.path = ekpath;
		kid.more = 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/' + kpath.replace(/[.#()]/g, "");
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
	
	if (!hash.length) { return $("#main").html('<section>' + item.desc + '</section>'); }
	
	$("a", $navlist).each(function(){
		var $this = $(this), href = decodeURIComponent($this.attr("href"));
		
		if (hash.indexOf(href) === 0) {
			$this.children().length && $this.addClass("nav-list-parent-open");
			
			href === hash && $(".nav-list-selected", $navlist).removeClass("nav-list-selected") && $this.addClass("nav-list-selected");
		}
	});
	
	hash.substring(1).split("/").forEach(function(part){
		crumbs.unshift(item = item.kids[part]);
	});
	
	var out = html(crumbs[1] || item, item);
	if (item.kids) {
		out += '<div style="margin-left:10px">';
		$.each(item.kids, function(name, kid){
			out += html(item, kid);
		});
		out += '</div>';
	}
	$("#main").html(out);
}).trigger("hashchange");


/*** generating ***/
function html(parent, item) {
	var syntax = "", argdesc = "", nosupport = [], isFn = false;
	
	if (item.html) { return item.html; }
	
	parent.name !== item.name && (syntax += '<a href="' + parent.path + '">' + parent.name.replace("()", "") + '</a>');
	
	syntax += item.name.replace("()", function(){
		isFn = true;
		
		return "(" + item.args.map(function(arg){
			var str = '<span class="s-atype">' + arg.type + '</span> <var>' + (arg.unlimited ? '...' : '') + arg.name + '</var>';
			
			arg.optional && (str =
				'<span class="s-optional">[</span>' + str +
				'<span class="s-optional">' +
					(arg["default"] ? ' = ' + $('<div/>').text(arg["default"]).html() : '') +
				']</span>'
			);
			
			argdesc += '<dt><code><var>' + arg.name + '</var></code></dt>'
				+ '<dd>' + arg.desc + '</dd>';
			
			return str;
		}).join(", ") + ")";
	}).replace(/^(#|\.)?(\w+)/, '$1<a href="' + item.path + '">$2</a>');
	
	syntax += (isFn || item.readonly ? ' →' : ' ↔') + ' <span class="s-rtype">' + $("<div/>").text(item.returns).html() + '</span>';
	
	$.each(item.unsupported || {}, function(browser, version){
		nosupport.push(browser +  " ≤ " + version);
	});
	
	return item.html = "<section>" +
		'<pre><code>' + syntax + '</code></pre>' +
		'<p>' +
			item.desc +
			(nosupport.length ? ' <span class="s-unsupported">Not supported in ' + nosupport.join(", ") + '.</span>' : '') +
			' <a href="' + item.more + '">more</a> ∙ <a>bug</a>' +
		'</p>' +
		(argdesc && '<dl>' + argdesc + '</dl>') +
	"</section>";
}

})(jQuery, tree);