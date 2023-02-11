music1="";
music2="";
function preload(){
music1=loadSound("music2.mp3");
music2=loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600,500);
canvas.position(470,250);

video = createCapture(VIDEO);
video.hide();

}

function draw(){
image(video,0,0,600,500)
}


