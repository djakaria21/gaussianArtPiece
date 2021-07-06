var img; 
var whitebg;
function preload() {
  img = loadImage("https://pusheen.com/wp-content/uploads/2020/01/Facebook-Preview_1200x630.jpg");

}
var pointilize = 1;
var speed = 100;
var tempPixels;

function setup() {

 createCanvas(1000,500);
 background(0);
 smooth();
 img.resize(1000,500);
 image(img, 0, 0);
 loadPixels();
 background(0);

 tempPixels = pixels;

}
function draw() {

  for (var i = 0; i < speed; i++)
  {
   var x = parseInt(randomGaussian()*100);
   var y = parseInt(randomGaussian()*100);
   //get location we want
   var loc = (x+mouseX) + (y+mouseY)*img.width;
   //have to adjust location by 4 due to weird way pixels are stored
   loc = loc*4
   var r = 1;
   var g = 1;
   var b = 1;
   var a = 1;

   if( x+mouseX < img.width && y+mouseY < img.height && y+mouseY > 0 && x+mouseX > 0)
   {
     r = tempPixels[loc];
     g = tempPixels[loc+1];
     b = tempPixels[loc+2];
     a = tempPixels[loc+3];

   }
   else{
    r = random(255);
    g = random(255);
    b = random(255);
    a= random(255);
   }


   noStroke();
   
   fill(r, g, b);
   circle(x+mouseX,y+mouseY,pointilize);
   stroke(r, g, b);
  //  line(mouseX, mouseY, x+mouseX, y+mouseY);
  //  line(mouseX, mouseY, x, y);

   
  }
}