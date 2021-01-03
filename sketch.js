const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400, 100, 400, 20);
	ball1=new Ball(300, 300, 25);
	ball2=new Ball(350, 300, 25);
	ball3=new Ball(400, 300, 25);
	ball4=new Ball(450, 300, 25);
	ball5=new Ball(500, 300, 25);

	rope1= new Rope(ball1.body, {x:ball1.body.position.x, y: 100});
	rope2= new Rope(ball2.body, {x:ball2.body.position.x, y: 100});
	rope3= new Rope(ball3.body, {x:ball3.body.position.x, y: 100});
	rope4= new Rope(ball4.body, {x:ball4.body.position.x, y: 100});
	rope5= new Rope(ball5.body, {x:ball5.body.position.x, y: 100});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -50, y: -300});
	}
}



