import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const key = localStorage.getItem(KEY);
if (key) {
    player.setCurrentTime(parseFloat(key));
}
player.on('timeupdate', function throttle(data) 
{localStorage.setItem(KEY, data.seconds.toString());}, 1000)

