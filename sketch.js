var bike, bikeImage;

var accidentImage, wonImage;

var car, car1Image, car2Image, car3Image;

var carGroup;

var footpathl, footpathr;

var trackImage, endbgImage;

var groundImage;

var form, game;

var gameState = 0;

var displayTimer;

var timer = 0;

function preload() {
    bikeImage = loadImage("./Images/bike.png");
    car1Image = loadImage("./Images/car1.png");
    car2Image = loadImage("./Images/car2.png");
    car3Image = loadImage("./Images/car3.png");
    trackImage = loadImage("./Images/track.png");
    groundImage = loadImage("./Images/ground.png");
    accidentImage = loadImage("./Images/accident.png");
    endbgImage = loadImage("./Images/endbg.png");
    wonImage = loadImage("./Images/won.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    displayTimer = createElement('h1');
    game = new Game();
    game.start();
    carGroup = new Group();

}

function draw() {

    if (gameState === 1) {
        game.play();
        spawnCars();
        showTimer();
    } else if (gameState === 2) {
        game.end();
    }
}

function spawnCars() {

    if (frameCount % 100 == 0) {
        car = createSprite(random(footpathl.x, footpathr.x), random(-windowHeight * 5, -windowHeight * 15));
        car.scale = 0.5;
        var number = Math.round(random(1, 3));
        switch (number) {
            case 1:
                car.addImage(car1Image);
                break;
            case 2:
                car.addImage(car2Image);
                break;
            case 3:
                car.addImage(car3Image);
                break;
            default:
                break;
        }
        carGroup.add(car);
        car.velocityY = random(5, 10);
        
        car.setCollider("rectangle", 0, 0, 100, 200);
    }

}

function showTimer() {
    if (World.frameCount % 60 === 0) {
        timer = timer + 1;
    }
    displayTimer.html("Seconds : " + timer);
    displayTimer.position(100, 100);
}