 nosex=0
nosey=0
 function  preload() {
clown_nose=loadImage('https://i.postimg.cc/pdGTyvzq/download.png')
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
   Video=createCapture(VIDEO);
   Video.size(300,300) 
   Video.hide()
   poseNet = ml5.poseNet(Video,modelloaded)
   poseNet.on ('pose',gotposes)
}

function take_snapshot(){
    save("YOURFILTER.png")
}
function modelloaded(){
    console.log("Posenet is active")
}
function gotposes(results){
if (results.length>0) {
console.log(results)
nosex=results[0].pose.nose.x-10
nosey=results[0].pose.nose.y-10
console.log("nose x = " + results[0].pose.nose.x)
console.log("nose y = " + results[0].pose.nose.y)
}
}
function draw() {
    image(Video,0,0,300,300)
    image(clown_nose,nosex,nosey,20,20)
    }