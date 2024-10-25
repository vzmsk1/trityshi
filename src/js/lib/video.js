import videojs from 'video.js';

function initVideoJS() {
  if (document.querySelectorAll('[data-videojs]').length) {
    const videos = document.querySelectorAll('[data-videojs]');
    videos.forEach(video => {
      const player = videojs(video, {
        // playsinline: true,
        // noUITitleAttributes: true,
        // // disablePictureInPicture: true,
        // controlBar: false,
        // controls: true,
        // bigPlayButton: true,
        // titleBar: false,
        // textTrackDisplay: false,
        // children: ['mediaLoader'],
        // children_: [],
      });

      video.parentElement.addEventListener('click', function () {
        if (video.closest('.vjs-playing')) {
          player.pause();
          console.log('log');
        }
      });
    });
  }
}

document.addEventListener('click', function (e) {
  console.log(e.target);
});

initVideoJS();
