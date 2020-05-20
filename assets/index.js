const video = document.querySelector("video")
const buttonPlay = document.querySelector("#playButton")
const buttonMute = document.querySelector("#muteButton")

function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function () {
    (this.media.paused) ? this.media.play() : this.media.pause()
}

MediaPlayer.prototype.mute = function () {
    (this.media.muted) ? this.media.muted = false : this.media.muted = true;

}

const player = new MediaPlayer({el: video});

buttonPlay.onclick = () => player.play();
buttonMute.onclick = () => player.mute();