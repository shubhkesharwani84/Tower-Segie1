const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint=Matter.Constraint;


var engine,world,chain,block;
var ground2;
var polygon;

function setup() {
  createCanvas(800,500);

  engine=Engine.create ()
	world = engine.world;

  
  ground=new Ground(380,480,300,20)
  block8 = new Box(380,370,30,40)
  block9 = new Box(440,450,30,40)
  block10 = new Box(380,450,30,40)
  block11 = new Box(410,450,30,40)
  block12= new Box(350,450,30,40)
  block13= new Box(320,450,30,40)
  block14= new Box(350,410,30,40)
  block15= new Box(380,410,30,40)
  block16= new Box(410,410,30,40)
  block=new Box(200,300,30,30)
  chain=new SlingShot(block.body,{x:180,y:300})




  ground2 = new Ground(600, 200, 250, 20)
  block18 = new Box(590,110,30,40)
  block19 = new Box(650,170,30,40)
  block20 = new Box(590,170,30,40)
  block21 = new Box(620,170,30,40)
  block22= new Box(560,170,30,40)
  block23= new Box(530,170,30,40)
  block24= new Box(620,140,30,40)
  block25= new Box(590,140,30,40)
  block26= new Box(560,140,30,40)
}

function draw() {
  Engine.update(engine);
  background(215);  
fill("black")
  block.display()
  ground.display();
  ground2.display();
  fill ("red")
  block18.display();
  block8.display();
  fill("yellow")
  block9.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block10.display();

  block11.display();
  block13.display();

  block12.display();
  fill(225)
  block25.display();
  block14.display();
  block15.display();
  block16.display();
  block24.display();
  block26.display();
  chain.display()
}
function mouseDragged(){
  Matter.Body.setPosition(block.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly()
}
