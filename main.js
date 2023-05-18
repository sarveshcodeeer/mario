function preload() {
	world_start = loadSound("world_start.wav");
  kick = loadSound("kick.wav")
 coi = loadSound("coin.wav")
  go = loadSound("mariodie.wav")
  jump = loadSound("jump.wav")
  goo = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("game") ; 
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.parent('game_console')
  video.size(800 , 400)
  pn = ml5.poseNet(video , modelLoaded) 
  pn.on("pose" , gotposes)
  
}

function modelLoaded() {
  
  console.log("model has loaded Bumblebee")
  
} 

function gotposes(results) {
  
  console.log(results) ; 
  
  if(results.length > 0){
    
    nosex = results[0].pose.nose.x ; 
    nosey = results[0].pose.nose.y ; 
    
     
    
  }
  
  
  
  
}


function draw() {
	game()
}






