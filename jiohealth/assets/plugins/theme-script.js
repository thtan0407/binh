$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$(".header .header-navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	$('.header .header-navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fal fa-times"></i></a></li>');
	//
	// Menu
	function callMenu() {
		if ($('body').hasClass('show_navigation')) {
			$('body').removeClass('show_navigation');
		} else {
			$('body').addClass('show_navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	
	$(window).scroll(function () {
		let top = $(document).scrollTop();
		if (top > 0) {
			$('.header').addClass('header-sticky animated fadeInDown');
		} else {
			$('.header').removeClass('header-sticky animated fadeInDown');
		}
	});
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#return-to-top').fadeIn();
		} else {
			$('#return-to-top').fadeOut();
		}
	});
	
	$(document).on('click', '#return-to-top', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	
	if ($('.banner-area').length > 0) {
		let bannerArea = new Swiper('.banner-area .swiper-container', {
			loop: true,
			slidesPerView: 1,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
	}
	
	if ($('.doctors-area').length > 0) {
		let doctorsArea = new Swiper('.doctors-area .swiper-container', {
			loop: true,
			slidesPerView: 1,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
	}
	
	if ($('#slide-Doctor').length > 0) {
		let owl = $('#slide-Doctor')
		owl.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 15000,
			autoplayHoverPause: false,
			dots: false,
			nav: false,
		});
		
		owl.on('changed.owl.carousel', function (event) {
			let link = $(this).find('.owl-item.active .slide-item').data('link');
			$("#changeLink").prop('href', link);
		});
	}
	;
	
	if ($("#slide-related-blog").length > 0) {
		let relatedBlog = new Swiper('#slide-related-blog', {
			loop: true,
			slidesPerView: 3,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}
		});
	}
	
	if ($('.block-review').length > 0) {
		let doctorsArea = new Swiper('.block-review .swiper-container', {
			loop: true,
			margin: 30,
			slidesPerView: 1,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
	}
	
	if ($('.block-info-02').length > 0) {
		let doctorsArea = new Swiper('.block-info-02 .swiper-container', {
			loop: true,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 3.5,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4.5,
					spaceBetween: 10,
				},
			}
		});
	}
	
	$('[data-toggle=tab]').click(function (e) {
		$('[data-toggle=tab]').removeClass('active');
	})
});
