import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video")
const buttonPlay = document.querySelector("#playButton")
const buttonMute = document.querySelector("#muteButton")

const player = new MediaPlayer({el: video, plugins: [
    //new AutoPlay()

]});

buttonPlay.onclick = () => player.play();
buttonMute.onclick = () => player.mute();