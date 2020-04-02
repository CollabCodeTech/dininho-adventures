'use strict';

function Dininho(context, screen, floorHeight) {
  const dininho = new Image();
  const position = {
    x: 420,
    y: screen.height - (floorHeight * 0.64) + dininho.height
  };

  dininho.src = "../../img/game/dininho/correndo/dininho_correndo_1.png";

  const draw = () => {
    dininho.addEventListener('load', () => {
      context.drawImage(dininho, position.x, position.y);
    })
  };

  const update = () => {
    console.log('Entrou tio!')
    position.x += 5;
  }

  return {
    draw,
    update
  };
}