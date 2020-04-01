'use strict';
((win, doc) => {
  const screen = {
    width: win.innerWidth,
    height: win.innerHeight
  };
  const $canvas = doc.querySelector('#game-dino');
  const context = $canvas.getContext('2d');
  const floor = new Floor(context, screen);
  const sky = new Sky(context, screen);
  
  $canvas.width = screen.width;
  $canvas.height = screen.height;

  context.globalCompositeOperation = "destination-over";

  floor.draw();
  sky.draw();
})(window, document);