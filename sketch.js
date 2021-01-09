
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3;
var Ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	
 


	engine = Engine.create();
	world = engine.world;

	side1 = Bodies.rectangle(1100,600,10,100, {isStatic:true})
	World.add(world,side1);
	side2 = Bodies.rectangle(1200,640,200,10, {isStatic:true})
	World.add(world,side2);
	side3 = Bodies.rectangle(1300,600,10,100, {isStatic:true})
	World.add(world,side3);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	//Create the Bodies Here.
	
	ball = new paper(100,100,30)


	Engine.run(engine);
  
}


function draw() {
	fill("blue");
  rectMode(CENTER);
  background(0);
  rect(side1.position.x,side1.position.y,10,100)
  rect(side2.position.x,side2.position.y,200,10)
  rect(side3.position.x,side3.position.y,10,100)
  ball.display();
  rect(ground.position.x,ground.position.y,width,10)
  
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-25});
  
	}
}



