class Log  {
    constructor(x, y){
      var options = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = 50;
          this.height = 50;
      this.image = loadImage("IMG/log.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
    }
  };