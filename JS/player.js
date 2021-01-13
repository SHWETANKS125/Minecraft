class Player  {
    constructor(x, y){
      var options = {
        
    }
      this.body = Bodies.rectangle(x, y, 50, 70, options);
          this.width = 50;
          this.height = 100;
      //this.image = loadImage("IMG/steve-stop.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
  }
}