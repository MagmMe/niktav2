// Magmme

// Paralax
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.heroAbout').css('top',-(scrolled*0.0315)+'rem');
  $('.heroAbout > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.heroAbout > h1').css('opacity',1-(scrolled*.00375));
  $('.heroKontakt').css('top',-(scrolled*0.0315)+'rem');
  $('.heroKontakt > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.heroKontakt > h1').css('opacity',1-(scrolled*.00375));
   $('.heroMaterialy').css('top',-(scrolled*0.0315)+'rem');
  $('.heroMaterialy > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.heroMaterialy > h1').css('opacity',1-(scrolled*.00375));

};


$(window).scroll(function(e){
  parallax();
});


/*$(window).scroll(function(){
      if($(this).scrollTop() > 400){
        $('.hero > h1').css('opacity',0);
    } else {
      $('.hero > h1').css('opacity',1);
    }
    });*/


// Animate

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

$(document).ready(function(){
    $('.magme').each(function() {
        animationHover(this, 'pulse');
    });
});


$(document).ready(function(){
    $('.magme_pulse').each(function() {
        animationHover(this, 'pulse');
    });
});

// Pasek inforacmi o Cookie

$(document).ready(function(){

  $.cookieBar();

});

