var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 isStatic:true;
     

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
World.add(world, packageBody);
isStatic:false;

	//Create a Ground
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



