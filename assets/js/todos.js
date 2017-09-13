// Check off to-dos by clicking
$("li").click(function () {
	//if completed
	console.log($(this).css("textDecoration"));
	if ($(this).css("color") === "rgb(153, 153, 153)") {
		$(this).css({
			color: "rgb(102, 102, 102)",
			textDecoration: "none"
		});
	} else {
		$(this).css({
			color: "rgb(153, 153, 153)",
			textDecoration: "line-through"
		});
	}
});