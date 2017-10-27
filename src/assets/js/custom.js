// Custom Scripts for Primal Template //
import WOW from 'wow.js'

/*eslint-disable*/
jQuery(function($) {
    "use strict";

        // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
        var mainbottom = $('#top').offset().top;

        // on scroll,
        $(window).on('scroll',function(){

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
       }

      });


  // Collapse navbar on click

   $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });



    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });





  /*-------- Owl Carousel ---------- */
    $(".reviews").owlCarousel({

    slideSpeed : 200,
    items: 1,
    singleItem: true,
    autoPlay : true,
    pagination : false
    });


  /* ------ Clients Section Owl Carousel ----- */

    $(".clients").owlCarousel({
    slideSpeed : 200,
    items: 5,
    singleItem: false,
    autoPlay : true,
    pagination : false
    });


  /* ------ jQuery for Easing min -- */

    $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
  });



/* --------- Wow Init ------ */

  new WOW().init();


  /* ----- Counter Up ----- */

$('.counter').counterUp({
		delay: 10,
		time: 1000
});

/* ----- Countdown ----- */

if($.find('#countdown')[0]) {
	 $('#countdown').countDown({
			 targetDate: {
					 'day': 		14,
					 'month': 	7,
					 'year': 	2017,
					 'hour': 	11,
					 'min': 		13,
					 'sec': 		0
			 },
			 omitWeeks: true
	 });
 //enter the count down date using the format year, month, day, time: hour, min, sec
 if( $('.day_field .top').html() == "0" ) $('.day_field').css('display','none');
}


/*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


/*----- Subscription Form ----- */

$(document).ready(function() {
  // jQuery Validation
  $("#signup").validate({
    // if valid, post data via AJAX
    submitHandler: function(form) {
      $.ajax({
        url: '/subscribers',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({ email: $("#email").val() })
      }).done(function () {
        $('.cta-inner').height($('.cta-inner').height()).width($('.cta-inner').width())
        $('.cta-inner').children().fadeOut('fast').hide();
        $('.cta-inner>h1')
          .html(`<span style="font-size: 1.5em; font-weight: light">
                   Thank you!
                 </span><br/>
                 <span style="font-size: 0.8em; font-weight: lighter">
                   You will get reply soon!
                 </span>')`)
          .fadeIn('fast')
      }).error(function (err) {
        $('#email').css('-webkit-box-shadow', '0 0 0 100px #ff9f9f inset')
        $('#email').css('color', '#993c3c')
        $('#email').after('<label id="email-error" class="error" for="email">Oups! We got an error: ' + err.statusText + '</label>')
        setTimeout(function () {
          $('#email').css('-webkit-box-shadow', '0 0 0 100px #ffffff inset')
          $('#email-error').fadeOut('fast')
        }, 7000)
      });
      // $.post("assets/php/subscribe.php", { email: $("#email").val() }, function(data) {
        // $('#response').html(data);
      // });
    },
    // all fields are required
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });
});

});
