const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy,tree;

var gameState = "onSling";

function preload()
{
  boy = loadImage("sprites/boy.png");
  tree = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  rock = new Rock(90,575,50);
  rope = new Rope(rock.body,{x:65, y:590});
  ground = new Ground(400,695,800,10);
  mango = new Mango(550,400,50,50);
  mango1 = new Mango(600,460,50,50);
  mango2 = new Mango(450,480,50,50);
  mango3 = new Mango(650,380,50,50);
	mango4 = new Mango(700,500,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
image(boy,50,540,200,200);
  image(tree,390, 300, 410, 410);
  ground.display();
  rock.display();
  rope.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  detectCollision(rock,mango);
  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);

  drawSprites();
 
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
  rope.fly();
  Matter.Body.setStatic(mango,false);
  gameState = "launched";
  
}
 function detectCollision(stone){
   mangoBodyPosition = mango.body.position
   stoneBodyPosition = stone.body.position;

   var distance = (stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=mango.r+stone.r+100){
     
   }
 }
 