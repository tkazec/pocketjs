(function($, tree){

/*** nav list ***/
var $navlist = (function build(obj, path){
	var $ul = $("<ul/>"), path = path ? path + "/" : "";
	
	$.each(obj.kids, function(name, thing){
		var parent = thing.kids, $li = $("<li/>");
		
		$("<a/>", {
			Class: "nav-list-" + (parent ? "parent" : "item"),
			href: "#" + encodeURIComponent(path + name),
			html: (parent ? "<a></a> " : "") + name
		}).appendTo($li);
		
		parent && $li.append(build(thing, path + name));
		
		$li.appendTo($ul);
	});
	
	return $ul;
})(tree).attr("id", "nav-list").appendTo("#nav");

$("a", $navlist).children("a").click(function(){
	$(this).parent().toggleClass("nav-list-parent-open");
	
	return false;
});


/*** loading ***/
function load(hash) {
	var item = tree, hash = decodeURIComponent(hash), path = hash.substring(1).split("/");
	
	path.forEach(function(part){
		item = item.kids[part];
	});
	
	$("a", $navlist).each(function(){
		var $this = $(this), href = decodeURIComponent($this.attr("href"));
		
		if (hash.indexOf(href) === 0) {
			$this.children().length && $this.addClass("nav-list-parent-open");
			
			href === hash && $(".nav-list-selected", $navlist).removeClass("nav-list-selected") && $this.addClass("nav-list-selected");
		}
	});
	
	$navlist.children().css("margin-right", $navlist[0].scrollHeight > $navlist.height() ? 3 : 0);
	
	$("#main").text(JSON.stringify(item));
}


/*** events ***/
$(window).bind("hashchange", function(){
	load(window.location.hash);
}).trigger("hashchange");

})(jQuery, tree);