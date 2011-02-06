(function($, tree){

list(tree).attr("id", "nav-list").appendTo("#nav");

$("a", "#nav-list").click(function(){
	var $this = $(this);
	
	if ($this.html() === "") {
		$this.parent().toggleClass("nav-parent-open");
		return false;
	} else {
		$this.add(".nav-selected", "#nav-list").toggleClass("nav-selected");
	}
});

function list(obj, path) {
	var $ul = $("<ul/>"), path = path ? path + "/" : "#";
	
	$.each(obj.kids, function(name, thing){
		var parent = thing.kids;
		
		$("<li/>")
			.append($("<a/>").addClass(parent ? "nav-parent" : "nav-item").attr({ href: path + name, title: thing.long }).html("<a></a>" + name))
			.append(parent ? list(thing, path + name) : "")
			.appendTo($ul);
	});
	
	return $ul;
}

})(jQuery, tree);