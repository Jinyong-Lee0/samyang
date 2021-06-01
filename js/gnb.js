$(document).ready(function () {
	$(".hb .Inner ul, .subMenu").hover(
		function () {
			// over
			$(".subMenu").stop().slideDown();
		},
		function () {
			// out
			$(".subMenu").stop().slideUp();
		}
	);

	var i;
	$(".hb .Inner ul li, .subMenu>li>ul").hover(
		function () {
			// over
			i = $(this).index();
			$(".hb .Inner ul li").eq(i).addClass("on").siblings().removeClass("on");
		},
		function () {
			// out
			$(".hb .Inner ul li").removeClass("on");
		}
	);
});
