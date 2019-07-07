$(function() {

	$('select').selectize();

	$('.feedback-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	$('.intro-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});

	$('.menu-toggler').on('click', function(e) {
		$('.mobile-menu, .mobile-menu__inner').height( $(window).height() - $('.header').height() );
		
		$('body').toggleClass('menu-openned');
	});

	$('.mobile-menu__menu li.has-child > a').on('click', function () {
		$(this).parents('li').toggleClass('active')

		return false;
	});
	
	$(window).bind('orientationchange', function() {
		adjustMenu();
	});
	
	function adjustMenu() {
		setTimeout(function() {
			$('.menu-wrapper, .menu-wrapper .wrap').css( 'height', $(window).height() - $('.header').height() );
		}, 100);
	}
	adjustMenu();
});