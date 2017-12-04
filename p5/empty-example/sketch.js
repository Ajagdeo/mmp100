var diam1 = 0;
function setup() {
  createCanvas(2000,800);
}

function draw () {
background("#FDFDFD");
fill("#f1a7db");
ellipse(50,100,diam1,diam1);

    textSize(100); //fontColor("#FFFFFF");
//text("1-800-HOTLINEBLING", -15, 120);
fill("#FFFFFF");
text("1-800-HOTLINEBLING", 120, 100);
fill("#FFFFFF");
text("1-800-HOTLINEBLING", 120, 180);
text("1-800-HOTLINEBLING", 120, 260);
fill("#FFFFFF");
text("1-800-HOTLINEBLING", 120, 340);
fill("#FFFFFF");
text("1-800-HOTLINEBLING", 120, 420);
text("1-800-HOTLINEBLING", 120, 500);
fill("#FFFFFF");
text("1-800-HOTLINEBLING", 120, 580);
fill("#FFFFFF");
text("1-800-HOTLINEBLING", 120, 660);
text("1-800-HOTLINEBLING", 120, 740);
fill("#FFFFFF");

}
function mousePressed(){
 diam1 = diam1+70;
}

