function Draw(context, screen) {
  const floor = new Floor(context, screen);
  const sky = new Sky(context, screen);
  const dininho = new Dininho(context, screen, floor.height);
  
  dininho.draw();
  sky.draw();
  floor.draw();
}