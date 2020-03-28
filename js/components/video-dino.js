const $wrapperVideoDino = document.querySelector('.wrapper-video-dino');
const $videoDino = $wrapperVideoDino.querySelector('.video-dino');

$wrapperVideoDino.addEventListener('click', () => {
  $videoDino.paused ? $videoDino.play() : $videoDino.pause();
  $wrapperVideoDino.classList.toggle('-play');
})