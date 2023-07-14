function preload(){

}

function setup(){
canvas=createCanvas(640, 480);
canvas.position(110, 150);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 20, 30, 580, 410)
fill(255, 127, 80)
rect(20,30,600,50,100)
rect(20,410,600,50,100)
rect(20,30,50,430,100)
rect(580,30,50,430,100)
}

function take_snapshot(){
save('student_name.png')   
}