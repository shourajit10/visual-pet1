//Create variables here
var dog, happyDog, database, foodS, foodStock ,dogImage
function preload()
{
  //load images here
dogImage= loadImage("images/dogImg.png")
happyDog= loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value" , readStock);
dog=createSprite(400 , 300)
  dog.addImage(dogImage)
  dog.scale=0.1
}


function draw() {  
background(46 , 139 , 87)
  drawSprites();
  //add styles here

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  textSize=20
  fill("orange")
  stokeWeight=10
  stroke("black")
  text("foodStock: "+foodS, 170,200)

 

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
Food:x
  })
}



