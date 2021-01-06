class Player  {
    constructor(x, y){
      var options = {
        restitution:1.0,
        density:0.5,
        friction:1.0
    }
      this.body = Bodies.rectangle(x, y, 50, 100, options);
          this.width = 50;
          this.height = 100;
      this.image = loadImage("IMG/steve-stop.png");
    }
    display(){
      var pos =this.body.position;
      push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y-20, this.width, this.height+10);
    pop();
    }
  };