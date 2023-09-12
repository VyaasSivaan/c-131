function setup(){
canvas=createCanvas(640,420);
canvas.center();


}
img="";
function preload(){
img=loadImage('dog_cat.jpg');


}
function draw(){
image(img,0,0,640,420);
fill("#ba6844");
text("Dog",45,75);
noFill();
stroke("#0b74ae");
rect(30,60,450,350);
}