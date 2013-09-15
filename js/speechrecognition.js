if (!('webkitSpeechRecognition' in window)) {
        alert('Web speech API is not supported in this browser');
      } 
    else {

        // Speech recognition init
        var recognition = new webkitSpeechRecognition();

        // continously listen to speech
        recognition.continuous = true;

        // set languages supported
        recognition.lang = ['English', ['en-US', 'United States']];

        // We return non-final strings so gameplay isn't laggy
        recognition.interimResults = true;

        recognition.onresult = function(e) {

        // set variable 
        var interim_transcript = '';
          if (e.results.length) {
             for (var i = event.resultIndex; i < event.results.length; i++) {
                 interim_transcript = event.results[i][0].transcript; 

                 // if the object isn't moving, allow commands to be sent down.
                 if(!move){gameLoop(interim_transcript,'voice');}
              }
            
           
          }
        };
      // start speech to text translation
      recognition.start();

   }
recognition.onsoundstart = console.log('sound has started');

recognition.onsoundend();