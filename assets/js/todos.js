// Check off to-dos by clicking
$("li").click(function () {
	//if completed
	$(this).toggleClass("completed");
});

// click on x to delete today
$("span").click(function(e) {
	$(this).parent('li').fadeOut(
		500, function() {
			$(this).remove();
		});

	e.stopPropagation(); // stop bubbling

});