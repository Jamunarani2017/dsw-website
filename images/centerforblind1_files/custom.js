(function($) {
    'use strict';

    /*-------------------------------------
    Header top closer
    -------------------------------------*/
    $('#header-top-close').on('click', function () {
        $('#header-top').slideUp();
    });

    /*-------------------------------------
    Header Search Toggle
    -------------------------------------*/
    $('#search-toggle').on('click', function () {
        $('#search-wrap').slideToggle();
        $(this).children('.fa').toggleClass('fa-search fa-close');
    });

    $('#search-toggle-mobile').on('click', function () {
        $('#search-wrap-mobile').slideToggle();
        $(this).children('.fa').toggleClass('fa-search fa-close');
    });

    /*-------------------------------------
    Language Selector
    -------------------------------------*/
    $('.drop-block').on('click', function () {
        $(this).children('.dropblock-drop').slideToggle();
    });

    /*-------------------------------------
    Secondary Nav Toggle
    -------------------------------------*/
    $('#secondary-nav-toggle').on('click', function () {
        $(this).toggleClass('active');

        $('body').on('click', function (e) {
            if ($('#secondary-nav-toggle').is(':visible') && $('#secondary-menu').is(':visible') && !$(e.target).is("#secondary-nav-toggle")) {
                $('#secondary-nav-toggle').removeClass('active');
            }
        });
    });

    /*-------------------------------------
    Mobile Navigation
    -------------------------------------*/
    function mobileNavigatin() {
        if ($(window).width() < 992) {
            $('body').on('click', function (e) {
                if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') && !$(e.target).is(".dropdown")) {
                    $('.navbar-collapse').collapse('hide');
                }
            });

            $('.dropdown').unbind('click');
            $('.dropdown-menu').slideUp();
            $('.dropdown').on('click', function (sub) {
                sub.stopPropagation();
                $(this).children('.dropdown-menu').slideToggle();
                $(this).toggleClass('dropped');
            });

        } else {
            $('.dropdown-menu').css('display', 'block');
        }
    }

    mobileNavigatin();

    /*-------------------------------------
    Slider & Carousel
    -------------------------------------*/

    /*** Banner Slider ***/
    if ($('#banner-slider').length > 0) {
        $('#banner-slider').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            //autoPlay: 3000,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false,
        });
    }

    /*** Slider Generic Single ***/
    $('.slider-generic-single').each(function () {
        $(this).owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false
        });
		
		var positions = $(this).offset();
		$(this).find('.owl-prev').css("left", -(positions.left));
		$(this).find('.owl-next').css("right", -(positions.left));
    });

    /*** Testimonial Carousel ***/
    if ($('#testimonial-carousel').length > 0) {
        $('#testimonial-carousel').owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true
        });
    }

    if ($('#testimonial-carousel-2, #testimonial-carousel-3, #testimonial-carousel-4').length > 0) {
        $('#testimonial-carousel-2, #testimonial-carousel-3, #testimonial-carousel-4').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false
        });
    }

    /*** Blog Carousel ***/
    $('.blog-carousel').each(function () {
        $(this).owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false
        });
    });

    /*** Sponsor Carousel ***/
    if ($('#sponsors-carousel').length > 0) {
        $('#sponsors-carousel').owlCarousel({
            items: 6,
            itemsDesktop: [1199, 6],
            itemsDesktopSmall: [991, 4],
            itemsTablet: [767, 3],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true
        });
    }

    /*** Cause Carousel ***/
    $('.cause-carousel').each(function () {
        $(this).owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 2],
            itemsMobile: [620, 1],
            slideSpeed: 200,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false
        });
    });

    /*** Event Carousel ***/
    $('.event-carousel').each(function () {
        $(this).owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 2],
            itemsMobile: [620, 1],
            slideSpeed: 200,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false
        });
    });

    /*** Gallery Carousel ***/
    $('.gallery-carousel').each(function () {
        $(this).owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false
        });
    });

    /*-------------------------------------
    Countdown
    -------------------------------------*/
    //Countdown 1
    $('.countdown-1').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            var countDay = 565.487 - (565.487 / 365) * (tm.strftime('%D'));
            var countHour = 565.487 - (565.487 / 24) * (tm.strftime('%H'));
            var countMin = 565.487 - (565.487 / 60) * (tm.strftime('%M'));
            var countSec = 565.487 - (565.487 / 60) * (tm.strftime('%S'));
            countTxt += '<div class="col-md-3 col-sm-6 col-xs-6"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span><svg height="200" width="200"><circle cx="100" cy="100" r="90" stroke-width="20" fill="none" stroke-dashoffset="' + countDay + '"/></svg></span></span></div>';
            countTxt += '<div class="col-md-3 col-sm-6 col-xs-6"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span><svg height="200" width="200"><circle cx="100" cy="100" r="90" stroke-width="20" fill="none" stroke-dashoffset="' + countHour + '"/></svg></span></span></div>';
            countTxt += '<div class="col-md-3 col-sm-6 col-xs-6"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Minutes</span></span><svg height="200" width="200"><circle cx="100" cy="100" r="90" stroke-width="20" fill="none" stroke-dashoffset="' + countMin + '"/></svg></span></span></div>';
            countTxt += '<div class="col-md-3 col-sm-6 col-xs-6"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Seconds</span></span><svg height="200" width="200"><circle cx="100" cy="100" r="90" stroke-width="20" fill="none" stroke-dashoffset="' + countSec + '"/></svg></span></span></div>';

            $(this).html(tm.strftime(countTxt));
        });
    });

    //Countdown 2
    $('.countdown-2').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            countTxt += '<div class="col-xs-3"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span></span></span></div>';
            countTxt += '<div class="col-xs-3"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span></span></span></div>';
            countTxt += '<div class="col-xs-3"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Mins</span></span></span></span></div>';
            countTxt += '<div class="col-xs-3"><span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Secs</span></span></span></span></div>';

            $(this).html(tm.strftime(countTxt));
        });
    });

    //Countdown 3
    $('.countdown-3').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Mins</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Secs</span></span></span></span>';

            $(this).html(tm.strftime(countTxt));
        });
    });

    //Widget Countdown
    $('.countdown-widget').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            var countDay = 201.062 - (201.062 / 365) * (tm.strftime('%D'));
            var countHour = 201.062 - (201.062 / 24) * (tm.strftime('%H'));
            var countMin = 201.062 - (201.062 / 60) * (tm.strftime('%M'));
            var countSec = 201.062 - (201.062 / 60) * (tm.strftime('%S'));
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span><svg><circle cx="35" cy="35" r="32" stroke-width="6" fill="none" stroke-dashoffset="' + countDay + '"/></svg></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span><svg><circle cx="35" cy="35" r="32" stroke-width="6" fill="none" stroke-dashoffset="' + countHour + '"/></svg></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Min</span></span><svg><circle cx="35" cy="35" r="32" stroke-width="6" fill="none" stroke-dashoffset="' + countMin + '"/></svg></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Sec</span></span><svg><circle cx="35" cy="35" r="32" stroke-width="6" fill="none" stroke-dashoffset="' + countSec + '"/></svg></span></span>';

            $(this).html(tm.strftime(countTxt));
        });
    });

    /*** Countdown Compact ***/
    $('.countdown-compact').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D</span><span class="text">D</span></span></span>: </span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">H</span></span></span>: </span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">M</span></span></span></span><br/>Left';
            $(this).html(tm.strftime(countTxt));
        });
    });

    /*-------------------------------------
    Count To
    -------------------------------------*/
    function animateCountTo(ct) {
        if ($.fn.visible && $(ct).visible() && !$(ct).hasClass('animated')) {
            $(ct).countTo({
                speed: 2000
            });
            $(ct).addClass('animated');
        }
    }

    function initCountTo() {
        var counter = $('.count');
        counter.each(function () {
            animateCountTo(this);
        });
    }

    initCountTo();

    /*-------------------------------------
    Gallery Filter
    -------------------------------------*/
    // Portfolio Filter Style
    var $container = [$('#gallery-items-1'), $('#gallery-items-2'), $('#gallery-items-3'), $('#gallery-items-4')],
        $optionSets = [$('#gallery-filter-1'), $('#gallery-filter-2'), $('#gallery-filter-3'), $('#gallery-filter-4')];

    $.each($container, function () {
        if ($(this).length > 0) {
            var $grid = $(this).isotope({
                itemSelector: '.gallery-item',
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
			
			$grid.imagesLoaded().progress( function() {
			  $grid.isotope('layout');
			});
        }
    });

    $.each($optionSets, function () {
        if ($(this).length > 0) {
            var thisControl = $(this).data('control');
            $(this).on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('button').removeClass('active');
                $(this).addClass('active');
                $('#' + thisControl).isotope({
                    filter: filterValue
                });
            });
        }
    });

    /*-------------------------------------
    Magnific Popup
    -------------------------------------*/
    $('.image-large').each(function () {
        $(this).magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
	
	$('.gallery-items').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});

    $('.video-play, .open-map').each(function () {
        $(this).magnificPopup({
            type: 'iframe'
        });

        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });
    });

    /*-----------------------------------
    Youtube Video
    -----------------------------------*/
    plyr.setup();

    /*-------------------------------------
    Animate Progress Bars
    -------------------------------------*/
    function animateProgressBar(pb) {
        if ($.fn.visible && $(pb).visible() && !$(pb).hasClass('animated')) {
            $(pb).css('width', $(pb).attr('aria-valuenow') + '%');
            $(pb).addClass('animated');
        }
    }

    function initProgressBar() {
        var progressBar = $('.progress-bar');
        progressBar.each(function () {
            animateProgressBar(this);
        });
    }

    initProgressBar();

    /*-------------------------------------
    Rounded Progressbar
    -------------------------------------*/
    function animateRoundedProgress(rpb) {
        if ($.fn.visible && $(rpb).visible() && !$(rpb).hasClass('animated') && !$(rpb).hasClass('small') && !$(rpb).hasClass('banner-circle')) {
            $(rpb).css('stroke-dashoffset', 565.487 - (565.487 / 100) * $(rpb).attr('aria-valuenow'));
        } else if ($.fn.visible && $(rpb).visible() && !$(rpb).hasClass('animated') && $(rpb).hasClass('small')) {
            $(rpb).css('stroke-dashoffset', 220 - (220 / 100) * $(rpb).attr('aria-valuenow'));
        } else if ($.fn.visible && $(rpb).visible() && !$(rpb).hasClass('animated') && $(rpb).hasClass('banner-circle')) {
            $(rpb).css('stroke-dashoffset', 678.584 - (678.584 / 100) * $(rpb).attr('aria-valuenow'));
        }
    }

    function initRoundedProgress() {
        var roundedProgress = $('.progress-cicle');
        roundedProgress.each(function () {
            animateRoundedProgress(this);
        });
    }

    initRoundedProgress();


    /*-------------------------------------
    Custom Scrollbar
    -------------------------------------*/
    if (!(navigator.userAgent.search("Chrome") >= 0)) {
        $('.verticle-scroll').each(function () {
            $(this).jScrollPane();
        });
    }

    /*-------------------------------------
    comingsoon full height
    -------------------------------------*/
    function commingsoon() {
        if ($('#coming-soon-wrap').length > 0) {
            $('#coming-soon-wrap').css('height', $(window).height());
        }
    }

    commingsoon();

    /*-------------------------------------
    Scroll Events
    -------------------------------------*/
    $(window).on('scroll', function () {
        initCountTo();
        initProgressBar();
        initRoundedProgress();
    });

    /*-------------------------------------
    Windows Events
    -------------------------------------*/
    $(window).on('resize orientationchange', function () {
        mobileNavigatin();
        commingsoon();
		
		$('.slider-generic-single').each(function () {		
			var positions = $(this).offset();
			$(this).find('.owl-prev').css("left", -(positions.left));
			$(this).find('.owl-next').css("right", -(positions.left));
		});
    });
	
	// $('.to-view').each(function () {
        // var w = $(this).data('width');
        // $(this).fancybox({
            // 'hideOnContentClick': true,
            // 'width': w,
            // 'autoSize': false
        // });
    // });

    /*==========================================================
            Gutenberg JS
        ==========================================================*/
    $('.alignfull').each(function(){
        var elemOffset = $(this).offset();
        var elemRightPos = $(window).width() - ($(this).width() + elemOffset.left);
        if(elemOffset.left > 0){
            $(this).css({
                'margin-left': 0 - elemOffset.left,
                'margin-right': 0 - elemRightPos,
                'max-width': 'none'
            });
        }
    });
	
})(jQuery);

/*-------------------------------------
Loader Wrap
-------------------------------------*/
jQuery(window).on('load', function () {
    jQuery("#loader-wrap").delay(200).fadeOut();
});
