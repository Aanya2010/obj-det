status="";

function setup() {
canvas=createCanvas(480, 380);
canvas.center()
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start(){
objectdet=ml5.objectDetector('cocossd', modelloaded);
document.getElementById("stat").innerHTML="status: Detecting objects"

}

function modelloaded(){
    console.log("hi its me ");
}