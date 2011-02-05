(function($, tree){

build(tree).attr("id", "nav-list").appendTo("#nav");

$("a", "#nav-list").click(function(){
	var $this = $(this);
	$this.toggleClass("nav-item-selected" + ($this.hasClass("nav-parent") ? " nav-parent-open" : ""))
});

function build(obj) {
	var $ul = $("<ul/>");
	
	$.each(obj.kids, function(name, thing){
		var parent = thing.kids;
		
		$("<li/>")
			.append($("<a/>").addClass(parent ? "nav-parent" : "nav-item").html(name))
			.append(parent ? build(thing) : "")
			.appendTo($ul);
	});
	
	return $ul;
}

})(jQuery, tree);