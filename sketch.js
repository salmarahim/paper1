var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Events=Matter.Events;
var box1,box2,box3;
var engine,world;
var ground;
var paperObject;
var launch,chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	

	Engine.run(engine);
	ground=new Ground(400,480,800,20);
	paperObject=new Paper(100,200,70);
	box1=new Dustbin(610,450,90,20);
	box2=new Box(570,405,5,100);
	box3=new Box(650,405,5,100);
	//chain=new Chain(paperObject.body,{x:200,y:100});

    launch=new Launcher(paperObject.body,{x:50,y:300});
}


function draw() {
	background(220);
  rectMode(CENTER);
  Engine.update(engine);
  
  ground.display();
  paperObject.display();
  box2.display();
  box3.display();
  box1.display();
  launch.display();
  //chain.display();
  drawSprites();
 
}
function mouseDragged(){
	Events.on(engine,'afterUpdate',function(){
		Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
	})
    
}


function mouseReleased(){
	engine.events={};
    launch.fly();
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:215,y:-175});

}
}

