new WOW().init();

$(document).ready(function(){
    $(window).scroll(function(){
        $('.header').toggleClass('scrolled', $(this).scrollTop() > 50);
    });


    $('.navbar-nav .nav-item .nav-link').click(function(){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parents('.nav-item').addClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 700);
    });

    $('.test-slider').slick({
         dots: true,
         arrows: false,
         autoplay: false,
         slidesToShow: 1,
         autoplaySpeed: 1300,
         responsive: [
           {
             breakpoint: 768,
             settings: {
               arrows: false,
               slidesToShow: 1
             }
           },
           {
             breakpoint: 480,
             settings: {
               arrows: false,
               slidesToShow: 1
             }
           }
         ]
        });

        $(function(){
    	$(".typed").typed({
    		strings: ["Coders.", "Developers.", "TECHBUDZ."],
    		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    		stringsElement: null,
    		// typing speed
    		typeSpeed: 100,
    		// time before typing starts
    		startDelay: 1200,
    		// backspacing speed
    		backSpeed: 80,
    		// time before backspacing
    		backDelay: 500,
    		// loop
    		loop: true,
    		// false = infinite
    		loopCount: 1,
    		// show cursor
    		showCursor: false,
    		// character for cursor
    		cursorChar: ".",
    		// attribute to type (null == text)
    		attr: null,
    		// either html or text
    		contentType: 'html',
    		// call when done callback function
    		callback: function() {},
    		// starting callback function before each string
    		preStringTyped: function() {},
    		//callback for every typed string
    		onStringTyped: function() {},
    		// callback for reset
    		resetCallback: function() {}
    	});
    });


});
