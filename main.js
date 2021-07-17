noseX=0;
noseY=0;
difference=0;
rightWristX=0;
rightWristY=0;
function setup() {
    video  = createCapture(VIDEO);
    video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(560,160)
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw() {
    background('#2e8b57')
    fill('#F90093')
    stroke('#F90093')
    text('Kaea',noseX,noseY)
    textSize(difference)
    document.getElementById("square_side").innerHTML="width and height of the square ="+difference
}
function modelLoaded(){
    console.log('poseNet is Initialized!')
}
function gotPoses(results)
{
    if(results.length>0)
 {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("noseX = "+ noseX + "noseY = "+ noseY)
 leftWristX = results[0].pose.leftWrist.x
rightWristY = results[0].pose.rightWrist.y
difference =floor(leftWristX - rightWristY);
console.log("leftWristX="+ leftWristX+ "rightWristX =" + rightWristX + "difference ="+ difference)
}
 }
