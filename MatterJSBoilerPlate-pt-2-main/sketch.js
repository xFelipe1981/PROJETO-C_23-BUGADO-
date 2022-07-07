
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle1=60;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Crie os Corpos aqui.
	var plane_options = {
	isStatic:true
	}
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
	fill("red")
	plane = Bodies.rectangle(700,700,10,10);
	World.add(world, plane);
	block1 = Bodies.rectangle(200,200,10,10);
	World.add(world, block1);
	block2 = Bodies.rectangle(600,600,10,10);
	World.add(world, block2);


	Engine.update(engine);
	var rotator_options = {
		isStatic: true
	}
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options)
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options)
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options)
	rotator4 = Bodies.rectangle(250,200,150,20,rotator_options)
	
	var particle_options = {
		restitution:0.4,
		friction:0.02
	}
	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(240,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(260,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(280,10,10,particle_options);
	World.add(world,particle4);


  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1)
  rect(0,0,150,20)
  pop();
  angle1 +=0.2
  
  drawSprites();
  
  
}



