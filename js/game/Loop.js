'use strict';

function Loop (context, screen) {
  context.clearRect(0, 0, screen.width, screen.height);

  Draw(context, screen);

  requestAnimationFrame(() => Loop(context, screen));
}