$( document ).ready(function() {
    $('.loading').fadeOut();
    $('#microphone-modal').modal();
});

$('#microphone-modal').jrumble({
		x: .5,
		y: 2,
		rotation: 0,
		speed: 160
});
$('#microphone-modal').trigger('startRumble');
