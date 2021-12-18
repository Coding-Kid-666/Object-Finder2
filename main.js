var object = "";
function preload() {
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 0, 0, 480, 380);

}

function start_something() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_now").innerHTML = "Status:Firing up Object-Finder_1329"; 
    object = document.getElementById("object_name").innerHTML;

}

function modelLoaded(){
    console.log("CoCoSSD has sucessfully loaded.");
    status_now = true;
}

