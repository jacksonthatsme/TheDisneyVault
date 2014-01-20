
$( document ).ready(function() {
    $( ".loading" ).delay(3000).fadeOut();
    $('#microphone-modal').modal({
	    opacity:80
    });
    $('#alpha_dust').seeThru({
			width: '100%',
			height: '100%',
			start:'external',
			end: 'stop'
	});
    
});

//PAGE DOWN MARGIN
var wh = $(window).height();

$('.pagedown').css('margin-bottom', (wh/3) );

$('.simplemodal-close').click(function(){
	$('body').removeClass('pre-dust');
	$('canvas').hide();
});

//MODAL LINKS
$('.about-link').click(function(){
	$('#about').modal({opacity:80, overlayClose: true});
});
$('.legal-link').click(function(){
	$('#legal').modal({opacity:80, overlayClose: true});
});
$('.colophon-link').click(function(){
	$('#colophon').modal({opacity:80, overlayClose: true});
});

$('area').click(function(){
	var dust = document.getElementById('alpha_dust');

    $('#microphone-modal h3').text("Allow use of your microphone above.");
    $('img.microphone-button').removeClass('mic-blink');
    $('img.microphone-button').addClass('mic-on');
    $('#microphone-modal h5').remove();
    whistle.init(null,null,'low');

});
document.addEventListener("whistleReady", function() {
    $('#microphone-modal h3').text("Now blow...");
}, false);
document.addEventListener("whistle", function() { 
    if (whistle.intensity > 100) {
      console.log("Whistle intensity is above 100");
      var dust = document.getElementById('alpha_dust');
      dust.play();
      $('#microphone-modal').modal.close();
      $('body').removeClass('pre-dust');
      
      document.removeEventListener('whistle');
    }
}, false);

$(window).scroll(function() {
  if ($(window).scrollTop() > 960){
    $('.dvd').addClass('animate');

  }
});

