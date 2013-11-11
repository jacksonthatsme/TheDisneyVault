
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

    $('#microphone-modal h3').toggle();
    $('img.microphone-button').removeClass('mic-blink');
    $('img.microphone-button').addClass('mic-on');
    $('#microphone-modal h5').remove();
    setTimeout(function(){
      $('#microphone-modal').fadeOut();
      dust.play();
    }, 300);
    $('body').removeClass('pre-dust');
    setTimeout(function(){
      $('canvas').fadeOut();
    }, 4000);
});