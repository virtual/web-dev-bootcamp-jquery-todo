// Check off to-dos by clicking
// add on listener to parent
$("ul").on("click", "li", function () {
	//if completed
	$(this).toggleClass("completed");
});

// click on x to delete today
$("ul").on("click", "span", function(e) {
	$(this).parent('li').fadeOut(
		500, function() {
			$(this).remove();
		});

	e.stopPropagation(); // stop bubbling

});

$("input[type='text']").keypress(function(e) {
	if (event.which === 13) { // enter key
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span>x</span>"+todoText+"</li>");
	}
	// click() only adds listeners for existing elements
	// on() will add listeners for all potential future elements
});