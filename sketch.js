const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var balls=[];
var ground;

function setup(){
  var canvas = createCanvas(1200,400);

  engine = Engine.create();
  world=engine.world;
  Engine.run(engine);
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,height-50,width,10,option)
  World.add(world,ground);


}
function mouseClicked(){
  balls.push(new Ball(mouseX,mouseY,10));
}
function mouseDragged(){
  balls.push(new Ball(mouseX,mouseY,10));
}
function draw()
{
  background(0);
  for(var i=0; i<balls.length; i++){
    balls[i].show();
  }
  
  fill("red")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,10)
  
  
}
