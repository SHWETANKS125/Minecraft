const Engine = Matter.Engine;
const  World= Matter.World;
const  Bodies = Matter.Bodies;
const  Constraint = Matter.Constraint;

var bedrocksnum=30;
var bedrocks=[];
var stones=[];
var grass=[];
var dirts=[];
var logs=[];
var leaves=[];
var x =-25;

function setup(){
 createCanvas(5000,1820);
 engine = Engine.create();
 world = engine.world;
 for(var i = 0;i<100;i++){
     x=x+50
 bedrocks.push(new BedRock(x,height-30))
 stones.push(new Stone(x,height-80))
 /* stones.push(new Stone(x,height-130))
  stones.push(new Stone(x,height-180))
  stones.push(new Stone(x,height-230))
  stones.push(new Stone(x,height-280))
  stones.push(new Stone(x,height-330))
  stones.push(new Stone(x,height-380))
  stones.push(new Stone(x,height-430))
  stones.push(new Stone(x,height-480))
  stones.push(new Stone(x,height-530))
  stones.push(new Stone(x,height-580))
  stones.push(new Stone(x,height-630))
  stones.push(new Stone(x,height-680))*/
  dirts.push(new DIRT(x,height-730))
  dirts.push(new DIRT(x,height-780))
  grass.push(new GRASS(x,height-830))
 }
 trees(175,height-930);
 hill(125,height-880)

 player = new Player(525,height-830);
 Matter.Body.setStatic(player.body,false);
 }
function draw(){
background(153,217,234);
Engine.update(engine);
keyPressed();
for (let p = 0; p < bedrocks.length; p++) {
    bedrocks[p].display();
}

for (let s = 0; s < stones.length; s++) {
   stones[s].display();
}

for (let m = 0; m < grass.length; m++) {
    grass[m].display();
}

for (let k = 0; k < dirts.length; k++) {
    dirts[k].display();
    
}
for (let k = 0; k < logs.length; k++) {
    logs[k].display();
}

for (let y = 0; y < leaves.length; y++) {
    leaves[y].display();
}
 player.display();
 console.log(player.position)
}

function trees(x,y){
    logs.push(new Log(x,y))
    logs.push(new Log(x,y-50))
    logs.push(new Log(x,y-100))
    logs.push(new Log(x,y-150))
    leaves.push(new Leaves(x,y-200))
    leaves.push(new Leaves(x-50,y-150))
    leaves.push(new Leaves(x+50,y-150))
    leaves.push(new Leaves(x+50,y-100))
    leaves.push(new Leaves(x-50,y-100))
    leaves.push(new Leaves(x-100,y-100))
    leaves.push(new Leaves(x+100,y-100))
    leaves.push(new Leaves(x-50,y-200))
    leaves.push(new Leaves(x+50,y-200))
    leaves.push(new Leaves(x,y-250))
}

 function hill(x,y){
    grass.push(new GRASS(x,y))
    grass.push(new GRASS(x+50,y))
    grass.push(new GRASS(x+100,y))
 }

function hill2(x,y){
    
}

function keyPressed(){
    if(keyDown(87)){
        player.body.position.x+=1
       }
     if(keyDown(83)){
         player.body.position.x+=-1
     }
      //if((74)){
     //  player.body.position.y+=-8
     //  }
}