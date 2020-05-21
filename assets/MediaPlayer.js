function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function () {
    (this.media.paused) ? this.media.play() : this.media.pause()
}

MediaPlayer.prototype.mute = function () {
    (this.media.muted) ? this.media.muted = false : this.media.muted = true;
}

export default MediaPlayer;