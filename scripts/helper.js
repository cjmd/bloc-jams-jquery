class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    $('.total-time').text( player.prettyTime(totalTime) );
  }
}

const helper = new Helper();
