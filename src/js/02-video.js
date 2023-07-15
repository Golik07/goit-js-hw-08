import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

valueTimeVideo();

const onPlay = throttle(data => {
  const valueTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(valueTime));
  console.log(valueTime);
}, 1000);

player.on('timeupdate', onPlay);

function valueTimeVideo() {
  const valueVideo = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(valueVideo);
}
