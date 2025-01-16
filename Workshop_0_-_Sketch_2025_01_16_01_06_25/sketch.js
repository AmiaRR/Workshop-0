let y = 0 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 191, 255);
  
  if (mouseX > 300){
    fill (0);
  } else {
    fill (255, 0, 255);
  }
  
  stroke (0)

  rect (100, y, 50, 50);
  
  y = y + 2;
  
  if (y > 600) {y = 0;}
 

  
   stroke (0)

  rect (200, y, 50, 50);
  
  y = y + 2;
  
  if (y > 600) {y = 0;}
  
    
     stroke (0)

  rect (300, y, 50, 50);
  
  y = y + 2;
  
  if (y > 600) {y = 0;}
  
  
  
       stroke (0)

  rect (400, y, 50, 50);
  
  y = y + 2;
  
  if (y > 600) {y = 0;}
  
   y = y + 2;
  
  if (y > 600) {y = 0;}
  
       stroke (255, 0, 255)

  rect (500, y, 50, 50);
  
  y = y + 2;
  
  if (y > 600) {y = 0;}
  
     y = y + 2;
  
  if (y > 600) {y = 0;}
  
       stroke (0)

  rect (500, y, 50, 50);
  
  y = y + 2;
  
  if (y > 600) {y = 0;}
  
  stroke (0);
  
}


  
 
  
  