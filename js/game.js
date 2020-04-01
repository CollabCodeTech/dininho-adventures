'use strict';
((win, doc) => {
  const screen = {
    width: win.innerWidth,
    height: win.innerHeight
  }

  const $canvas = doc.querySelector('#game-dino');
  const context = $canvas.getContext('2d');
  const floor = new Image();

  $canvas.width = screen.width;
  $canvas.height = screen.height;

  floor.src = '../img/game/floor.png';

  floor.addEventListener('load', () => {
    context.drawImage(floor, 0, screen.height - floor.height);
  });
})(window, document);