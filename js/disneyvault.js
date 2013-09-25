$( document ).ready(function() {
    $( ".loading" ).delay(3000).fadeOut();
    $('#microphone-modal').modal();
});

//RUMBLE ON MODAL
$('#microphone-modal').jrumble({
		x: .5,
		y: 2,
		rotation: 0,
		speed: 160
});
$('#microphone-modal').trigger('startRumble');

//PAGE DOWN MARGIN
var wh = $(window).height();

$('.pagedown').css('margin-bottom', (wh/3) );

$('.simplemodal-close').click(function(){
	$('body').removeClass('pre-dust');
});
