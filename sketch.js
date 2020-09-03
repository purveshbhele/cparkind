var parking1 , parking2 ;
var wall1 ;
var car1,car2;

function setup() {
  createCanvas(400,400);
  parking1=createSprite(10,100,10,50);
  parking1.shapeColor="white";
  parking2=createSprite(10,300,10,50);
  parking2.shapeColor="white";
  
  car1=createSprite(380,100, 10,10);
  car1 .shapeColor= "white";
  car2=createSprite(380,300,10,10);
  car2.shapeColor="white";
  
   wall1=createSprite(200,200,400,5);
   wall1 . shapeColor= "white"; 
   
   car1.velocityX=-3;
   car2.velocityX=-2;
   
   
}


function draw() {
  background(0); 
  if(parking1.x - car1.x < car1.width/2 + parking1.width/2) {
    
    car1.shapeColor="red";
    
       } 
       else {
        car1.velocityX= 0; 
        parking1.shapeColor="red"; 
      


       }
       if(parking2.x - car2.x < car2.width/2 + parking2.width/2) {
    
        car2.shapeColor="green";
        
           } 
           else {
            car2.velocityX= 0; 
            parking2.shapeColor="green"; 
            
          
           }
                        
  drawSprites();
  
}
