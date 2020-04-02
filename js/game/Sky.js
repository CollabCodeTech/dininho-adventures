'use strict';

function Sky(context, screen) {
  const sky = new Image();
  sky.src = '../../img/sky.png';

  const center = () => (screen.width / 2) - (sky.width / 2);

  const draw = () => {
    sky.addEventListener('load', () => {
      context.drawImage(sky, center(), 0);
    });
  };

  return {
    draw
  }
}