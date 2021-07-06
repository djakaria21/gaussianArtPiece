function setup() {
    createCanvas(400, 400)
  
   smooth();
  }
  
  function draw() {
    for (let i = 0; i < 5; i++)
    {
     var x = randomGaussian()*100;
     var y = randomGaussian()*100;
     var r = abs(randomGaussian()*255);
     var g = abs(randomGaussian()*255);
     var b = abs(randomGaussian()*255);
     fill(r,g,b);
     ellipse(x+mouseX,y+mouseY,15,15);
     stroke(r, g, b);
     line(mouseX, mouseY, x+mouseX, y+mouseY);
     line(mouseX, mouseY, x, y);
     
    }
  }