//Create variables here
var dog;
var happyDog;
var database,position;
var foodS = 0;
var foodStock;

function preload()
{
  //load images here
dog = loadImage("dogImg.png");
happyDog = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  backGround(46,139,87);
dog = createSprite(100,340,20,50);
dog.addImage("dogImg");
happyDog.addImage("dogImg1"); 
foodStock=database.ref('food');
foodStock.on("value",readStock);
  
}


function draw() {  

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);

  }

}
//function to read value from DB
function readStock(data){
food-data.val();

}

//function to write value in DB
function writeStock(){
database.ref('/').update({
food:x

})

}
