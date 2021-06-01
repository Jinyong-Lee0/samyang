$(document).ready(function () {
	n = 0;
	var a = setInterval(move, 3000);

	function move() {
		if (n != 2) {
			n++;
		} else {
			n = 0;
		}
		$(".noticeBanner ul li").removeClass("on");
		$(".noticeBanner ul li").eq(n).addClass("on");

		$(".noticeBanner .wrap").animate({"margin-left": "-=313px"}, 300, function () {
			$(".noticeBanner .wrap a").first().appendTo(".noticeBanner .wrap");
			$(".noticeBanner .wrap").css({"margin-left": "+=313px"});
		});
	}

	$(".noticeBanner ul li").hover(
		function () {
			clearInterval(a);
		},
		function () {
			a = setInterval(move, 3000);
		}
	);
});

// 지금 가지고 있는 값이 몇인지 확인하는 것이 필요함.
//
