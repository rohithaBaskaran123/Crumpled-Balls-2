
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(900, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper=new Paper(200,200,15);
ground = Bodies.rectangle(width/2, 560, width, 10 , {isStatic:true} );
World.add(world, ground);
	Engine.run(engine);
	out1=new Bin(700,550,200,20);
	out2=new Bin(810,510,20,100);
	out3=new Bin(590,510,20,100);

}


function draw() {
Engine.update(engine);
rectMode(CENTER);
  background(0);
  keyPressed();
  paper.display();
  out1.display();
  out2.display();
  out3.display();
rect(ground.position.x, ground.position.y, width,10); 
}
function keyPressed(){
     if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-80})

	 }


}


