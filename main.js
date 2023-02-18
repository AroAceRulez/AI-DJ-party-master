leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
music1="";
music2="";
scoreLeftWrist=0;
scoreRightWrist=0;
song1status="";
song2status="";


function preload(){
music1=loadSound("music.mp3");
music2=loadSound("music2.mp3");
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
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);

    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log("scoreRightWrist = " + scoreRightWrist);

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
image(video,0,0,600,500);

fill("blue");
stroke("blue");

song1status=music1.isPlaying();
song2status=music2.isPlaying();

if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY, 20);
    music2.stop();
    if (song1status == false){
    document.getElementById("song").innerHTML = "track 1 is playing ";
    music1.play();
    }
}
if(scoreRightWrist > 0.2){
    circle(rightWristX, rightWristY, 20);
    music1.stop();
    if (song2status == false){
    document.getElementById("song").innerHTML = "track 2 is playing ";
    music2.play();
    }
}
}


