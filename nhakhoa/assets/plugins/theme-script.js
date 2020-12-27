$(document).ready(function () {
	if (typeof isPage !== "undefined" && isPage != "" && isPage == 1) {
		$('.header').addClass('header-index');
		$('.header .logo-index').removeClass('d-none');
		$('.header .logo-page').addClass('d-none');
	}
	
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$(".header .header-navigation > ul > li > ul").each(function (index) {
			$(this).prev().append("<i class='fal fa-angle-down'></i>")
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
	
	function callMenu() {
		if ($('body').hasClass('show-navigation')) {
			$('body').removeClass('show-navigation');
		} else {
			$('body').addClass('show-navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	
	// $(window).scroll(function () {
	// 	let top = $(document).scrollTop();
	// 	if (top > 0) {
	// 		$('.header').addClass('header-sticky animated fadeInDown');
	// 	} else {
	// 		$('.header').removeClass('header-sticky animated fadeInDown');
	// 	}
	// });
	
	
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
	
	$(".open-search, #close-search").click(function (e) {
		e.stopPropagation();
		if ($("body").hasClass('search-open')) {
			$("body").removeClass("search-open");
		} else {
			$("body").addClass("search-open");
		}
	})
	
	if ($('.banner-area').length > 0) {
		let bannerArea = new Swiper('.banner-area .swiper-container', {
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			speed: 2000,
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
	
	if ($('.client-area').length > 0) {
		let clientArea = new Swiper('.client-area .swiper-container', {
			loop: true,
			slidesPerView: 1,
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
				525: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 4.3,
					spaceBetween: 30,
				},
			}
		});
	}
	
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
	
	if ($(".page-aboutus").length > 0) {
		let slideService = new Swiper('.page-aboutus .swiper-container', {
			loop: true,
			slidesPerView: 4,
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
				500: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}
		});
	}
	
	// Progress bar & scroll page
	if ($('#progress-scroll-page').length > 0) {
		let positionProgress = $('#progress-scroll-page').offset().top - 500,
			flag = true;
		$(window).scroll(function () {
			if ($(this).scrollTop() >= positionProgress && flag) {
				$('#progress-scroll-page .progress-inner--item').each(function () {
					let elm = $(this).find(".progress-bar"),
						value = elm.attr('aria-valuenow') + '%';
					elm.animate({width: value});
				})
				
				flag = false;
			}
		});
		
		// Change Image - After & Before
		let image = $("#image"),
			handle = $("#handle"),
			changeImage = $("#changeImage");
		
		function onChangeImage() {
			handle.css("left", changeImage.val() + "%");
			image.css("width", changeImage.val() + "%");
		}
		
		window.onload = function () {
			$('#changeImage').on('input', function () {
				onChangeImage();
			})
		};
	}
	
	$('[data-toggle=tab]').click(function (e) {
		$('[data-toggle=tab]').removeClass('active');
	})
});
