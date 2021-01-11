class Form {
    constructor() {
        this.title = createElement('h2');
        this.title.html("Pizza Delivery Game");
        this.input = createInput("Enter Name");
        this.button = createButton("Challenge Accepted!");
        this.welcome = createElement('h3');
        this.reset = createButton('Reset');

    }

    display() {
        this.title.position(500, 150);
        this.input.position(500, 300);
        this.button.position(550, 350);
        this.reset.position(50, 50);
        this.button.mousePressed(() => {
            console.log("helloWorld");
            this.input.hide();
            this.button.hide();
            player.update();
        });
        this.reset.mousePressed( () => {
            game.updategameState(0);
        })
    }
    hide() {
        this.title.hide();
        this.welcome.hide();
    }
}