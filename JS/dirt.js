class DIRT{
    constructor(x, y, width, height){
      var options = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
      this.image = loadImage("IMG/dirt.jpg");
    }
    display(){
      var pos =this.body.position;
      push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
    }
  }