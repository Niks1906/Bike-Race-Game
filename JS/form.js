class Form {
    constructor() {
        this.title = createElement('h2');
        this.title.html("Pizza Delivery Game");
        this.input = createInput("Enter Name");
        this.button = createButton("Challenge Accepted!");
        this.welcome = createElement('h3');
    }

    display() {
        this.title.position(500, 150);
        this.input.position(500, 300);
        this.button.position(550, 350);
        this.button.mousePressed(() => {
            console.log("helloWorld");
            this.input.hide();
            this.button.hide();
            gameState = 1;
        });
    }
    hide() {
        this.title.hide();
        this.welcome.hide();
    }
}