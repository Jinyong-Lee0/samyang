$(document).ready(function () {
	var n = 3;
	link = $(".ramen li").eq(n).find("img").attr("link");
	$(".detail a").attr("href", link);
	var a = setInterval(function () {
		$(".ramen").children().eq(n).children("p, h3").removeClass("on");
		$(".ramen").animate({"margin-left": "-=263px"}, 300, function () {
			$(".ramen li").first().appendTo(".ramen");
			$(".ramen").css({"margin-left": "+=263px"});
			if (n != 9) {
				// $(".ramen li").eq(n).children().removeClass("on")
				// console.log($(".ramen").children().eq(n).text());
				$(".ramen").children().eq(n).children("p").addClass("on");
				$(".ramen").children().eq(n).children("h3").addClass("on");
			} else {
				n = 0;
				$(".ramen").children().eq(n).children("p").addClass("on");
				$(".ramen").children().eq(n).children("h3").addClass("on");
			}
		});
		link = $(".ramen li")
			.eq(n + 1)
			.find("img")
			.attr("link");
		$(".detail a").attr("href", link);
	}, 3000);
});
