'use strict';

((win, doc) => {
  const screen = {
    width: win.innerWidth,
    height: win.innerHeight
  };
  const $canvas = doc.querySelector('#game-dino');
  const context = $canvas.getContext('2d');
  
  $canvas.width = screen.width;
  $canvas.height = screen.height;

  Loop(context, screen);
})(window, document);