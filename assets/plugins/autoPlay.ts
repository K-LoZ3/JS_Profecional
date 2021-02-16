import MediaPlayer from "../mediaPlayer";

class autoPLay {
   constructor() { }
   run(player: MediaPlayer) {
      if (!player.media.muted) {
         player.media.muted = true;
      }
      player.play();
   }
}


export default autoPLay;