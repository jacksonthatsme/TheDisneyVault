$('#microphone-modal').modal();
$( document ).ready(function() {
    $( ".loading" ).delay(3000).fadeOut( function() {
    	$('#microphone-modal').addClass('modal-effect');
  });

});

//$('#microphone-modal').modal();

$('#microphone-modal').jrumble({
		x: .5,
		y: 2,
		rotation: 0,
		speed: 160
});
$('#microphone-modal').trigger('startRumble');

