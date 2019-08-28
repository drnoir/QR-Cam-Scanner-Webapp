$(document).ready(function(){

let now = new Date().toLocaleTimeString();

// fade in the interface slowly
window.onload = function(){
    $( ".bg-interface" ).animate({
        opacity: 1
      }, 1000, function() {
        $("#boot")[0].play();
        $( "span.time" ).append(now);
  });

let scanner = new Instascan.Scanner({ video: document.getElementById('videoElement') });
      scanner.addListener('scan', function (content) {
        $("#beep")[0].play();
        window.location.href = content;
        console.log(content);
      });
      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });

}});
