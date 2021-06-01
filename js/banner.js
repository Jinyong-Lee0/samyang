$(document).ready(function () {
	var n = 0;
	var i = 0;
	$("#banner .bannerImg li").fadeOut(0);
	$("#banner .bannerImg li").eq(n).fadeIn(0);
	var a = setInterval(function () {
		if (n < 6) {
			$("#banner .bannerImg li").eq(n).fadeToggle();
			n++;
			$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
			$("#banner .bannerImg li").eq(n).fadeToggle();
		} else {
			$("#banner .bannerImg li").eq(n).fadeToggle();
			n = 0;
			$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
			$("#banner .bannerImg li").eq(n).fadeToggle();
		}
	}, 3000);

	$("#banner .Inner .prev").click(function () {
		if (n != 0) {
			$("#banner .bannerImg li").eq(n).fadeToggle();
			n--;
			$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
			$("#banner .bannerImg li").eq(n).fadeToggle();
		} else {
			$("#banner .bannerImg li").eq(n).fadeToggle();
			n = 6;
			$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
			$("#banner .bannerImg li").eq(n).fadeToggle();
		}
	});

	$("#banner .Inner .next").click(function () {
		if (n < 6) {
			$("#banner .bannerImg li").eq(n).fadeToggle();
			n++;
			$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
			$("#banner .bannerImg li").eq(n).fadeToggle();
		} else {
			$("#banner .bannerImg li").eq(n).fadeToggle();
			n = 0;
			$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
			$("#banner .bannerImg li").eq(n).fadeToggle();
		}
	});

	$(".progress ul li").click(function () {
		i = $(this).index();
		$("#banner .bannerImg li").fadeOut();
		$("#banner .bannerImg li").eq(i).fadeIn();
		n = i;
		$(".progress li").eq(n).addClass("on").siblings().removeClass("on");
	});
});
