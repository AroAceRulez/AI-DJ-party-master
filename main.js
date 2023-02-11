leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
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

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
   if(results.length > 0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
   }
}

function modelLoaded(){
    console.log('Model has been loaded');
}
function draw(){
image(video,0,0,600,500)
}


