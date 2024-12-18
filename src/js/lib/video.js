import videojs from 'video.js';

function initVideoJS() {
  if (document.querySelectorAll('[data-videojs]').length) {
    const videos = document.querySelectorAll('[data-videojs]');
    videos.forEach(video => {
      const player = videojs(video, {
        playsinline: true,
        noUITitleAttributes: true,
        disablePictureInPicture: true,
        controlBar: false,
        controls: false,
        bigPlayButton: true,
        titleBar: false,
        textTrackDisplay: false,
        children: ['mediaLoader'],
        children_: [],
      });

      document
        .querySelector('.about__poster')
        .addEventListener('click', function () {
          if (player.paused()) {
            player.play();
          } else {
            player.pause();
          }
        });
    });
  }
}

initVideoJS();
