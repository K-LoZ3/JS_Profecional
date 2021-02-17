import MediaPlayer from './mediaPlayer';
import autoPlay from './plugins/autoPlay';
import autoPause from './plugins/autoPause';
import Ads from './plugins/ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new autoPlay(), new autoPause(), new Ads()] });

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
   navigator.serviceWorker.register('../sw.js').catch(err => {
      console.log(err.message);
   });
}