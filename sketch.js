const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21;
var box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40;
var ball, spring;
var ground, floatingGround;
var backgroundImage, bg;

function preload() {
  getTime();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new RedBox(400,360,20,30);
  box2 = new GreenBox(420,360,20,30);
  box3 = new BlueBox(440,360,20,30);
  box4 = new YellowBox(460,360,20,30);
  box5 = new RedBox(480,360,20,30);
  box6 = new GreenBox(500,360,20,30);
  box7 = new BlueBox(410,330,20,30);
  box8 = new YellowBox(430,330,20,30);
  box9 = new RedBox(450,330,20,30);
  box10 = new GreenBox(470,330,20,30);
  box11 = new BlueBox(490,330,20,30);
  box12 = new YellowBox(420,310,20,30);
  box13 = new RedBox(440,310,20,30);
  box14 = new GreenBox(460,310,20,30);
  box15 = new BlueBox(480,310,20,30);
  box16 = new YellowBox(430,280,20,30);
  box17 = new RedBox(450,280,20,30);
  box18 = new GreenBox(470,280,20,30);
  box19 = new BlueBox(440,250,20,30);
  box20 = new YellowBox(460,250,20,30);
  box21 = new RedBox(450,220,20,30);
  
  box22 = new GreenBox(600,135,20,30);
  box23 = new BlueBox(620,135,20,30);
  box24 = new YellowBox(640,135,20,30);
  box25 = new RedBox(660,135,20,30);
  box26 = new GreenBox(680,135,20,30);
  box27 = new BlueBox(700,135,20,30);
  box28 = new YellowBox(610,105,20,30);
  box29 = new RedBox(630,105,20,30);
  box30 = new GreenBox(650,105,20,30);
  box31 = new BlueBox(670,105,20,30);
  box32 = new YellowBox(690,105,20,30);
  box33 = new RedBox(620,75,20,30);
  box34 = new GreenBox(640,75,20,30);
  box35 = new BlueBox(660,75,20,30);
  box36 = new YellowBox(680,75,20,30);
  box37 = new RedBox(630,45,20,30);
  box38 = new GreenBox(650,45,20,30);
  box39 = new BlueBox(670,45,20,30);
  box40 = new GreenBox(650,30,20,30);
  
  ball = new Ball(0,0,25);

  spring = new Slingshot(ball.body,{x:200,y:200});

  ground = new Ground(400,390,800,20);

  floatingGround = new Ground(650,160,200,20);
  
}

// the draw function
function draw() {
  if(backgroundImage)
  background(backgroundImage);

  Engine.update(engine);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  ball.display();

  spring.display();

  ground.display();

  floatingGround.display();
} 

// the mouse dragged function
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

// the mouse released function
function mouseReleased(){
  spring.release();
}

// the key pressed function
function keyPressed(){
  if(keyCode===32){
    spring.attach(ball.body);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  if(hour >= 06 && hour <= 18) {
    bg = "light.png";
  }
  else
  {
    bg = "dark.png";
  }

  backgroundImage = loadImage(bg);
}