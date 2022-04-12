$(function() {

	$('.toggle-block').click(function() {
		$(this).toggleClass('active');
	});

	$('.faq__q').on('click', function() {
		console.log('1111');

		var cont = $(this).parents('.faq');

		$(cont).toggleClass('active');
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

	// $('.img-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	dots: true
	// });

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

	$('.team-slider').slick({
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
				breakpoint: 768,
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


	$('.gallery-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: false,
		prevArrow: `<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
				<g>
					<g>
						<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
							c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
							c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
							c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
					</g>
				</g>
			</svg>
		</button>`,
		nextArrow: `<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
				<g>
					<g>
						<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
							c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
							c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
							c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
					</g>
				</g>
			</svg>
		</button>`
	});

});
