class Sword {

    constructor() {
        this.body = Bodies.rectangle(600, 200, 5, 100);
        World.add(world, this.body);


        this.width = 5;
        this.height = 100;
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();

    }

}