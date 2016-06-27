$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	
	//Продукты, открытие попапов
	$(".products__block").click(function() {
		$('.product--pop').toggle();
		if ($(".shadow").hasClass("active-shadow") != true) {
			$(".shadow").addClass("active-shadow");
		}
	});

	$(".product--pop__close").click(function() {
		$('.product--pop').toggle();
		$(".shadow").removeClass("active-shadow");
	})
	//main slider
	$('.slider-wrap').slick({
	 	speed: 800,
		dots: true,
		arrows: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 15000
	});
});


