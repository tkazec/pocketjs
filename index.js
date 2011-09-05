(function($){

/*** tree ***/
// insert reference directly for production
var tree = JSON.parse($.ajax("docs.json", {
	async: false,
	dataType: "text"
}).responseText);


/*** listing ***/
var $navlist = (function build(parent, path){
	var $ul = $("<ul/>"), path = path ? path + "/" : "";
	
	$.each(parent.kids, function(name, kid){
		var hasKids = kid.kids, $li = $("<li/>"), kpath = path + name, ekpath = "#!" + encodeURIComponent(kpath);
		
		$("<a/>", {
			Class: "nav-list-" + (hasKids ? "parent" : "item"),
			href: ekpath,
			html: (hasKids ? "<a>+</a> " : "") + name
		}).appendTo($li);
		
		hasKids && $li.append(build(kid, path + name));
		
		$li.appendTo($ul);
		
		kid.name = name;
		kid.path = ekpath;
		kid.more = 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/' + kpath.replace(/[.#()]/g, "");
	});
	
	return $ul;
})(tree).attr("id", "nav-list").appendTo("#nav");

$("a", $navlist).children().click(function(){
	$(this).html($(this).parent().toggleClass("nav-list-parent-open").hasClass("nav-list-parent-open") ? "−" : "+");
	
	return false;
});


/*** searching ***/
var $navsearch = $("#nav-search").bind("input", function(){
	var text = $(this).val().trim().toLowerCase(), matches = [], out = "";
	
	if (!text) { return window.location.hash = $(".nav-list-selected", $navlist).attr("href") || ""; }
	
	decodeURIComponent(window.location.hash)[1] !== "?" && _gaq.push(["_trackPageview", "/?"]);
	window.location.hash = encodeURIComponent("?" + text);
	
	(function match(parent, item){
		var index = (item.name || "").toLowerCase().indexOf(text);
		
		index !== -1 && matches.push({ parent: parent, item: item, index: index });
		
		item.kids && $.each(item.kids, function(k, v){ match(item.name ? item : v, v); });
	})(tree, tree);
	
	if (matches.length) {
		matches.sort(function(a, b){
			var anl = a.item.name.length, bnl = b.item.name.length;
			return a.index === b.index ? (anl === bnl ? 0 : anl - bnl) : a.index - b.index;
		}).forEach(function(obj){
			out += html(obj.parent, obj.item);
		});
	} else {
		out = '<section><p>No results found for <span class="s-val">' + $('<div/>').text(text).html() + '</span>! <a class="bug">Bug?</a></p></section';
	}
	
	$("body").scrollTop(0);
	$("#main").html(out);
});


/*** loading ***/
$(window).bind("hashchange", function(){
	var hash = decodeURIComponent(window.location.hash), val = hash.substring(2), search = $navsearch.val(), item = tree, crumbs = [];
	
	if (!hash.length) {
		$("#main").html('<section>' + item.desc + '</section>');
		_gaq.push(["_trackPageview", "/"]);
		return;
	} else if (hash[1] === "?") {
		val !== search && $navsearch.val(val).trigger("input");
		!search && _gaq.push(["_trackPageview", "/?"]);
		return;
	} else {
		$navsearch.val("");
		_gaq.push(["_trackPageview", "/" + val]);
	}
	
	$("a", $navlist).each(function(){
		var $this = $(this), href = decodeURIComponent($this.attr("href"));
		
		if (hash.indexOf(href) === 0) {
			$this.children().length && $this.addClass("nav-list-parent-open").children().html("−");
			
			href === hash && $(".nav-list-selected", $navlist).removeClass("nav-list-selected") && $this.addClass("nav-list-selected");
		}
	});
	
	val.split("/").forEach(function(part){
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
	$("body").scrollTop(0);
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
	
	item.literal && (syntax += item.args.reduce(function(str, arg, i){
		return str + '<var>' + arg.name + '</var>' + item.literal[i + 1];
	}, "\n" + item.literal[0]));
	
	$.each(item.unsupported || {}, function(browser, version){
		nosupport.push(browser +  " ≤ " + version);
	});
	
	return item.html = '<section>' +
		'<pre><code>' + syntax + '</code></pre>' +
		'<p>' +
			item.desc +
			(nosupport.length ? ' <span class="s-unsupported">Not supported in ' + nosupport.join(", ") + '.</span>' : '') +
			' <a href="' + item.more + '">more</a> ∙ <a class="bug">bug</a>' +
		'</p>' +
		(argdesc && '<dl>' + argdesc + '</dl>') +
	'</section>';
}


/*** bugs ***/
$(".bug").live("click", function(){
	$(this).replaceWith("Please <a>let us know</a> or <a>submit a fix</a>!");
});

})(jQuery);