const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg ="sunrise1.png";
var hour,backgroundImage;

function preload() {
// create getBackgroundImg( ) here
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImage)
background(backgroundImage)
    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    textSize(30);

    if(hour >=12){
        text("time:"+ hour%12+"pm",50,100);
    }
    else if(hour ==0){
        text("time:12am",100,100);
    }
    else{
        text("time:"+ hour%12+"am",50,100); 
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=11){
        bg="sunrise3.png"
    }
    else if(hour>=11 && hour<=13){
        bg="sunrise4.png"
    }
    else if(hour>=13 && hour<=15){
        bg="sunrise5.png"
    }
    else if(hour>=15 && hour<=17){
        bg="sunrise6.png"
    }
    else if(hour>=17 && hour<=18){
        bg="sunrise7.png"
    }
    else if(hour>=18 && hour<=20){
        bg="sunrise8.png"
    }
    else if(hour>=20 && hour<=23){
        bg="sunrise9.png"
    }
    else if(hour>=23 && hour==0){
        bg = "sunrise10.png";
    }else if(hour==0 && hour<-03){
        bg = "sunrise11.png";
    }else{
        bg = "sunrise12.png";
    }
    //load the image in backgroundImg variable here
backgroundImage=loadImage(bg);
}
