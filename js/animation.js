



window.onload=function(){




var frameNumber = 0, // start video at frame 0
  // lower numbers = faster playback
  playbackConst = 300,
  // get page height from video duration
  setHeight = document.getElementById("set-height"),
  // select video element
  vid = document.getElementById("v0");
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener("loadedmetadata", function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";

console.log(setHeight.style.height)

});

var totalDuration = Math.floor(vid.duration) * playbackConst;










// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);

  var percentPlaying = Math.floor (( frameNumber * 100 ) / vid.duration);

 
var x = percentPlaying;
switch(true) {
    case (x < 3):
        $("#poeta").text( "A aquel hombre le pidieron su tiempo <br> para que lo juntara al tiempo de la Historia. " );
        break;

    case ((x > 3)&&(x < 5)):
        $("#poeta").text( "" );
       window.scroll(0,window.pageYOffset+5)
        break;

         case (x == 5):
         $("#poeta").text('sigue escroleando friend')
         break;





   //  case 3:
   //      $("#poeta").text( "Other text ******" );
   //      break;
   // case 4:
   //      $("#poeta").text( "Other text  *****r" );
   //      $("#poeta").fadeIn();
   //      break;
   //  case 5:
   //      $("#poeta").text( "Other text  ****er" );
   //      $("#poeta").fadeOut();
   //      break;
   //  case 6:
   //      $("#poeta").text( "Other text  ***ker" );
   //      $("#poeta").fadeIn();
   //      break;
   //  case 7:
   //      $("#poeta").text( "Other text  **cker" );
   //      $( "#poeta" ).addClass( "tacho" );
   //      break;
   //  case 8:
   //      $("#poeta").text( "Other text  *ucker" );
   //      break;
   //  case 9:
   //      $("#poeta").text( "Other text  fucker" );
   //      break;
   //  case 10:
   //      $("#poeta").text( "contare hasta tres:" );
   //      break;

   //  case 11:
   //      $("#poeta").text( "Uno.." );
   //      break;

   //  case 12:
   //      $("#poeta").text( "Dos.." );
   //      break;


   //  case 13:
   //      $("#poeta").text( "Para que?" );
   //      break;

   //  case 14:
   //      $("#poeta").text( "Para que volver?" );
   //      break;


   //  case 15:
   //      $("#poeta").text( "Para qué si aquí hay mucho más de lo que siempre que quisimos tener?" );
   //      break;



}







console.log(percentPlaying);

}

window.requestAnimationFrame(scrollPlay);



}


window.onscroll=function(){




var x = document.getElementById("snd"); 

  x.play();




}

 