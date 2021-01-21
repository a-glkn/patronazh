$(function() {

	$('.toggle-block').click(function() {
		$(this).toggleClass('active');
	});

	$('select').selectize();

	$('.tabs').on('click', '.tabs-header__item', function () {
		var index = $(this).index();
		var $cont = $(this).parents('.tabs');
		
		$('.tabs-header .tabs-header__item.active', $cont).removeClass('active');
		$('.tabs-header .tabs-header__item:eq(' + index + ')', $cont).addClass('active');

		$('.tabs-content .tabs-content__item.active', $cont).removeClass('active');
		$('.tabs-content .tabs-content__item:eq(' + index + ')', $cont).addClass('active');

		return false;
	});

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

	$('.intro-slider').not('.intro-slider_v-2').slick({
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

	$('.intro-slider_v-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});

	$('.img-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

	$('.img-slider').click(function (e) { 
		e.preventDefault();
		
		$(this).slick('slickNext');
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

	if( $('.side-menu').length ) {
		$(window).scroll(function () { 
			if( $(window).width() > 991 ) {
				var offset = $('.col-sidebar').offset();
				var top = offset.top;
				var left = offset.left;
	
				var scrollTop = $(window).scrollTop();
				
				console.log(scrollTop, top);
	
				if(scrollTop > top) {
					$('.side-menu').css('margin-top', scrollTop - top);
				} else {
					$('.side-menu').css('margin-top', 0);
				}
			} else {
				$('.side-menu').css('margin-top', 0);
			}
		});
	}

	$('a.to-top').click(function (e) { 
		e.preventDefault();
		
		$('html,body').animate({scrollTop:0}, 600);
	});
});
