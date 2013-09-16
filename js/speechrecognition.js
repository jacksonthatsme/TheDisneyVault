    if (!('webkitSpeechRecognition' in window)) {
        alert('Web speech API is not supported in this browser');
      } 
    else {

        // Speech recognizer init
        var recognizer = new webkitSpeechRecognition();

        // continously listen to speech
        recognizer.continuous = true;

        // set languages supported
        recognizer.lang = ['English', ['en-US', 'United States']];

        // We return non-final strings so gameplay isn't laggy
        recognizer.interimResults = true;

        recognizer.onresult = function(e) {

        // set variable 
        var interim_transcript = '';
          if (e.results.length) {
             for (var i = event.resultIndex; i < event.results.length; i++) {
                 interim_transcript = event.results[i][0].transcript; 

                 console.log(interim_transcript);
              }
            
           
          }
        };
      // start speech to text translation
      recognizer.start();

   }
