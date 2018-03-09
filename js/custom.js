
(function($){
  "use strict";

  $(window).load(function() {

/*************************
        Preloader
*************************/
   $("#load").fadeOut();
   $('#loading').delay(0).fadeOut('slow');

/*************************
        Owl carousel
*************************/
   $('.owl-carousel-1').owlCarousel({
       items:1,
       loop:true,
       autoplay:true,
       autoplayTimeout:2500,
       autoplayHoverPause:true,
       smartSpeed:800,
       dots:true,
       nav:false
      });
  });


/*************************
        NiceScroll
*************************/
  $("html").niceScroll({
    scrollspeed: 150,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#2f3742',
    autohidemode: true,
    zindex: 999999999,
    horizrailenabled: false,
    cursorborderradius: 0
  });

/*********************************
          Placeholder
**********************************/
$('[placeholder]').focus(function() {
 var input = $(this);
 if (input.val() == input.attr('placeholder')) {
  input.val('');
  input.removeClass('placeholder');
 }
}).blur(function() {
 var input = $(this);
 if (input.val() == '' || input.val() == input.attr('placeholder')) {
  input.addClass('placeholder');
  input.val(input.attr('placeholder'));
 }
}).blur().parents('form').submit(function() {
 $(this).find('[placeholder]').each(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
   input.val('');
  }
 })
});

})(jQuery);
