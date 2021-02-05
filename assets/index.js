import MediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/autoPlay.js';
import autoPause from './plugins/autoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new autoPlay(), new autoPause()] });

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => player.toggleMute();