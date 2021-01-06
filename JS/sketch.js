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
 bedrocks.push(new BedRock(x,height-30,50,50))
 stones.push(new Stone(x,height-80,50,50))
  stones.push(new Stone(x,height-130,50,50))
  stones.push(new Stone(x,height-180,50,50))
  stones.push(new Stone(x,height-230,50,50))
  stones.push(new Stone(x,height-280,50,50))
  stones.push(new Stone(x,height-330,50,50))
  stones.push(new Stone(x,height-380,50,50))
  stones.push(new Stone(x,height-430,50,50))
  stones.push(new Stone(x,height-480,50,50))
  stones.push(new Stone(x,height-530,50,50))
  stones.push(new Stone(x,height-580,50,50))
  stones.push(new Stone(x,height-630,50,50))
  stones.push(new Stone(x,height-680,50,50))
  dirts.push(new DIRT(x,height-730,50,50))
  dirts.push(new DIRT(x,height-780,50,50))
 }
 trees(2025,height-430);

 player = new Player(400,height-800);
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
}

function trees(x,y){
    logs.push(new Log(x,y,50,50))
    logs.push(new Log(x,y-50,50,50))
    logs.push(new Log(x,y-100,50,50))
    logs.push(new Log(x,y-150,50,50))
    leaves.push(new Leaves(x,y-200,50,50))
    leaves.push(new Leaves(x-50,y-150,50,50))
    leaves.push(new Leaves(x+50,y-150,50,50))
    leaves.push(new Leaves(x+50,y-100,50,50))
    leaves.push(new Leaves(x-50,y-100,50,50))
    leaves.push(new Leaves(x-100,y-100,50,50))
    leaves.push(new Leaves(x+100,y-100,50,50))
    leaves.push(new Leaves(x-50,y-200,50,50))
    leaves.push(new Leaves(x+50,y-200,50,50))
    leaves.push(new Leaves(x,y-250,50,50))
}

function keyPressed(){
    if(keyDown(87)){
        player.body.position.x+=1
       }
     if(keyDown(83)){
         player.body.position.x+=-1
     }
      if((74)){
       player.body.position.y+=-8
       }
}