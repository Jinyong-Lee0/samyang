$(document).ready(function () {
	var n = 0;
	var i = 0;
	var a = setInterval(function () {
		if (n != 2) {
			n += 1;
			$(".contentsInner1 .newProduct .list li").eq(n).addClass("on").siblings().removeClass("on");
			$(".new").animate({"margin-left": "-=250px"}, 300);
		} else {
			n = 0;
			$(".contentsInner1 .newProduct .list li").eq(n).addClass("on").siblings().removeClass("on");
			$(".new").animate({"margin-left": "+=500px"}, 300);
		}
	}, 2000);

	$(".newProduct .list li").click(function () {
		n = $(this).index();
		$(".contentsInner1 .newProduct .list li").eq(n).addClass("on").siblings().removeClass("on");
		$(".newProduct .new")
			.stop(true, true)
			.animate({"margin-left": n * -250 + 60 + "px"}, 300);
	});
});
