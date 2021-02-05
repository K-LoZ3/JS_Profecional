import MediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/autoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new autoPlay()] });

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => player.toggleMute();