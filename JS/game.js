class Game {
    constructor() { }

    async start() {
        if (gameState === 0) {

            form = new Form();
            form.display();
        }
        
        bike = createSprite(windowWidth/2, windowHeight/4, 20, 50);

    }

    play() {
        form.hide();
        image(trackImage,  0, -displayHeight*4, displayWidth, displayHeight*5);
     
        drawSprites();
    };

    end() { 
        var endMessage = createElement('h1');
        endMessage.html("Game Over");
        endMessage.position(windowWidth/2, windowHeight/3);
    };
}    