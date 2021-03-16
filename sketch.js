var thief
var lazer1
var lazer2
var barrier


function preload(){
  Bg = loadImage("Background.GIF")
  thief1 = loadImage("thief.png")
  star1 = loadImage("Star.webp")
  guard = loadImage("black.png")
}


function setup() {
  createCanvas(1200,6000);

  thief = createSprite(1100,5880,30,30)
  thief.addImage(thief1)
  thief.scale = 0.1

  lazer1 = createSprite(400,5600,800,5)
  lazer1.velocityY = 2
  lazer1.shapeColor='red'

  lazer2 = createSprite(800,5300,800,5)
  lazer2.velocityY = -2
  lazer2.shapeColor='red'

  barrier = createSprite(100,5100,2400,5)
  barrier.visible = false

  barrier2 = createSprite(100,5700,2400,5)
  barrier2.visible = false

  end1 = createSprite(600,4800,250,50)

  black1 = createSprite(100,4600,30,30)
  black1.addImage(guard)
  black1.velocityX = 3
  black1.scale = 0.3

  barrier3 = createSprite(05,4500,5,1600)
  barrier3.visible = false


  barrier4 = createSprite(1195,4500,5,1600)
  barrier4.visible = false



  

 


  
}

function draw() {
  background(Bg);  

  lazer1.bounceOff(barrier)
  lazer2.bounceOff(barrier)
  lazer2.bounceOff(barrier2)
  lazer1.bounceOff(barrier2)

  if(end1.isTouching(thief)){
    noStroke();
    textSize(35)
    fill("red")
    text("Congradulations on crossing the first level.That was easy wasn't it." , 100, 4700)
    text("Best of luck for the rest of the rounds",300,4760)
  }

  if(keyDown("w")){
    thief.y = thief.y-5
  
  }

  if(keyDown("s")){
    thief.y = thief.y+5
  }

  if(keyDown("a")){
    thief.x = thief.x-5
  }

  
  if(keyDown("d")){
    thief.x = thief.x+5
  }

 






  drawSprites();

  noStroke();
  textSize(35)
  fill("white")
  text("Start" , 600, 5940)
}