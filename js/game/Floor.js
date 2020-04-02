'use strict';

function Floor (context, screen) {
  const floor = new Image();
  floor.src = '../../img/game/floor.png';

  const draw = () => {
    floor.addEventListener('load', () => {
      context.drawImage(floor, 0, screen.height - floor.height);
      context.drawImage(floor, floor.width, screen.height - floor.height);
    });
  }

  return {
    draw,
    height: floor.height
  }
}

