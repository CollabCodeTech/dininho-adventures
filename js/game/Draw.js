function Draw(context, screen) {
  const sky = new Sky(context, screen);
  const floor = new Floor(context, screen);
  const dininho = new Dininho(context, screen, floor.height);

  floor.draw();
  sky.draw();
  dininho.draw();
}