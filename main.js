status= "";
video= "";

function setup(){
    canvas= createCanvas(280, 280);
    canvas.center()
}

function preload(){
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 280, 280);
}

function start(){
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    video.loop();
    video.speed(1);
    video.volume();
}