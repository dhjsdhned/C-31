class Boat {

  constructor(x, y, width, height, boatPos) {
    var options = {
      // giving this for the boat
      restitution:0.8,
      friction:1.0,
      density:1.0
    };
    // we load the image
    // we add a rectangular body i.e is the boat
    // we add the width and height
    // we add it to the world
    this.width = width;
    this.height = height;
    this.boatPosition= boatPos;
    this.image= loadImage("assets/boat.png");
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    // we give an angle and a position
    var angle= this.body,angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
