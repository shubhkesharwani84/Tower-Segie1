const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint=Matter.Constraint;


var engine,world,chain,block;

var polygon;

function setup() {
  createCanvas(800,400);

  engine=Engine.create ()
	world = engine.world;

  
  ground=new Ground(380,280,400,20)
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12= new Box(450,235,30,40)
  block13= new Box(360,195,30,40)
  block14= new Box(390,195,30,40)
  block15= new Box(420,195,30,40)
  block16= new Box(390,155,30,40)
  block=new Box(200,200,30,30)
  chain=new SlingShot(block.body,{x:200,y:200})
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
fill("black")
  block.display()
  ground.display();
  fill ("red")
  block8.display();
  fill("yellow")
  block9.display();

  block10.display();

  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  chain.display()
}
function mouseDragged(){
  Matter.Body.setPosition(block.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly()
}