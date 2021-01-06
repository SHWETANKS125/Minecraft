class Player  {
    constructor(x, y){
      var options = {
        restitution:0.00001,
        density:15.0,
        friction:1.0
    }
      this.body = Bodies.rectangle(x, y, 50, 70, options);
          this.width = 50;
          this.height = 100;
      this.image = loadImage("IMG/steve-stop.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };