import MediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/autoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ /* new autoPlay() */] });

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();