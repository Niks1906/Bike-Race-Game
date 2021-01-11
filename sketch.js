var bike, bikeImage;

var car1Image, car2Image, car3Image;

var trackImage;

var gameState = 0;

function preload() {
    bikeImage = loadImage("./Images/bike.png");
    car1Image = loadImage("./Images/car1.png");
    car2Image = loadImage("./Images/car2.png");
    car3Image = loadImage("./Images/car3.png");
    trackImage = loadImage("./Images/track.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);

    form = new Form();
    form.display();
}

function draw() {

    drawSprites();
}