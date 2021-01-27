class Game {
  constructor() {}

  async start() {
    if (gameState === 0) {
      form = new Form();
      form.display();
    }
    bike = createSprite(windowWidth / 2, (windowHeight * 5) / 8, 20, 50);
    bike.addImage(bikeImage);
    bike.scale = 0.2;

    footpathl = createSprite(220, -windowHeight * 8, 50, windowHeight * 16);
    footpathl.visible = false;
    footpathr = createSprite(
      windowWidth - 225,
      -windowHeight * 8,
      50,
      windowHeight * 16
    );
    footpathr.visible = false;
  }

  play() {
    form.hide();
    image(trackImage, 0, -windowHeight * 15, windowWidth, windowHeight * 16);
    image(groundImage, 0, windowHeight / 2, windowWidth, windowHeight / 2);
    image(groundImage, 0, -windowHeight * 15, windowWidth, windowHeight / 2);
    bike.velocityY = -5;
    if (keyDown(LEFT_ARROW) || touches.length[0][0] < windowWidth / 2) {
      bike.velocityX = -5;
      touches = [];
    } else if (keyDown(RIGHT_ARROW) || touches.length[0][0] > windowWidth / 2) {
      bike.velocityX = 5;
      touches = [];
    }

    camera.position.y = bike.position.y;
    if (
      timer >= 40 ||
      bike.isTouching(footpathl) ||
      bike.isTouching(footpathr) ||
      carGroup.isTouching(bike)
    ) {
      gameState = 2;
    }
    drawSprites();
  }

  end() {
    var endMessage = createElement("h1");
    endMessage.html("Game Over");
    endMessage.position(windowWidth / 2, windowHeight / 3);

    var wonMessage = createElement("h2");
    var lostMessage = createElement("h2");

    bike.velocityY = 0;
    bike.velocityX = 0;

    background("#A0C1B8");
    if (timer == 40) {
      image(wonImage, bike.x , bike.y, 200, 200);
      wonMessage.html("You Won");
      wonMessage.position(windowWidth / 2, windowHeight / 4);
    } else {
      image(accidentImage, bike.x, bike.y, 200, 200);
      lostMessage.html("You Lost");
      lostMessage.position(windowWidth / 2, windowHeight / 4);
    }
  }
}
