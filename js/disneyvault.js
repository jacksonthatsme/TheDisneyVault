
$( document ).ready(function() {
    $( ".loading" ).delay(3000).fadeOut();
    $('#microphone-modal').modal({
	    opacity:40
    });
    $('#alpha_dust').seeThru({
			width: '100%',
			height: '100%',
			start:'clicktoplay',
			end: 'rewind'
	});
    
});

//PAGE DOWN MARGIN
var wh = $(window).height();

$('.pagedown').css('margin-bottom', (wh/3) );

$('.simplemodal-close').click(function(){
	$('body').removeClass('pre-dust');
});
