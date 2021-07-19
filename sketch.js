var paperObject;
var side1, side2, bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


}

function setup() {
	createCanvas(2000, 700);
    
	

	engine = Engine.create();
	world = engine.world;

 
		bottom= new trashcan(1500, 670, 300, 20, {isStatic:true});
		

		



	paperObject = new paper(200,450,40);

	
	


    groundObject=new ground(width/2,670,width,20);
    World.add(world, groundObject);
	Engine.run(engine);




}


function draw() {
  rectMode(CENTER);
  background("black");
  paperObject.display();
  bottom.display();

  keyPressed();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:3,y:-3.5});
	}
}
