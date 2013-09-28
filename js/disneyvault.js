
$( document ).ready(function() {
    $( ".loading" ).delay(3000).fadeOut();
    $('#microphone-modal').modal({
	    opacity:40
    });
    $('#alpha_dust').seeThru({
			width: '100%',
			height: '100%',
			start:'external'
	});
    
});

//PAGE DOWN MARGIN
var wh = $(window).height();

$('.pagedown').css('margin-bottom', (wh/3) );

$('.simplemodal-close').click(function(){
	$('body').removeClass('pre-dust');
});

$('area').click(function{
	var dust = document.getElementById('alpha_dust');

	getUserMedia({audio:true}, gotStream);
    $('#microphone-modal h3').toggle();
    $('img.microphone-button').removeClass('mic-blink');
    $('img.microphone-button').addClass('mic-on');
    $('#microphone-modal h5').remove();
    dust.play();
});
