$(document).ready(function(){
 
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    dots:true,
    center:true,
    items:true,
    responsive:{},
    
});


});

  var typed = new Typed('#typed', {
    
    strings: [
        'I Am ',
        'Larry ',
        'Daniels',
        'Developer',
        'Designer'
      ],
      typeSpeed: 60,
      loop: true, loopCount: Infinity,
  });

  $(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>900);
  });


  
