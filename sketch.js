var dog,sadDog,happyDog, database;
var foodcount;



function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);
  var dogf= database.ref("FOODCOUNT")
  dogf.on("value",function(data){
 foodcount = data.val()
 console.log(foodcount)
  })
 

  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  
}

function draw() {
  background(46,139,87);
   stroke ( "white")
   textSize( 30)
   strokeWeight(10)
  text( "FOOD COUNT:"+ foodcount, 200,50) 
  


  if( keyDown(UP_ARROW)){
    foodcount = foodcount -1
    updatedatabase()
  }
  


 

 
  drawSprites();
}
  function updatedatabase(){

  database.ref("/").update({
    FOODCOUNT:foodcount
  })
  }




