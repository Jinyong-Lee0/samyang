$(document).ready(function () {
	$(".last .lang").slideUp(0);
	$(".f4 > div>ul").slideUp(0);

	$(".last").click(function () {
		$(this).children().slideDown();
	});

	$(".last .lang").mouseleave(function () {
		$(".last>.lang").stop().slideUp();
	});

	$(".f4>div>h3 ").click(function () {
		$(".f4>div>.familySite").slideDown();
	});

	$(".f4>div>.familySite").mouseleave(function () {
		$(".f4>div>.familySite").slideUp();
	});
});
