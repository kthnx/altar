//var img;
// var f1, f1book, f1monitor, f1drawer, t1a;
// var t1f, t1f1, t1f2, t1f3, t1f4, t1f5;

var t1b;
var t1b1, t1b2, t1b3, t1b4;
var textFiller, textHeader;
var hFont, bFont;

function preload() {
  //img = loadImage('assets/bee.jpg');
  t1b = loadImage('assets/t1b.png');
  t1b1 = loadImage('assets/t1b1.png');
  t1b2 = loadImage('assets/t1b2.png');
  t1b3 = loadImage('assets/t1b3.png');
  t1b4 = loadImage('assets/t1b4.png');

  hFont = loadFont('assets/EBGaramond-Regular.ttf');
  bFont = loadFont('assets/ShadowsIntoLight-Regular.ttf');


  // t1a = loadImage('assets/t1a.jpg');
  // f1 = loadImage('assets/f1.png');
  // f1book = loadImage('assets/f1book.png');
  // f1monitor = loadImage('assets/f1monitor.png');
  // f1drawer = loadImage('assets/f1drawer.png');
  //
  // t1f = loadImage('assets/t1f.png');
  // t1f1 = loadImage('assets/t1f1.png');
  // t1f2 = loadImage('assets/t1f2.png');
  // t1f3 = loadImage('assets/t1f3.png');
  // t1f4 = loadImage('assets/t1f4.png');
  // t1f5 = loadImage('assets/t1f5.png');

  textFiller = "";
  textHeader = "";
}

function setup() {
  createCanvas(1200,900);

}

function draw() {
  // if(mouseX >=275 && mouseX <=575 && mouseY >= 50 && mouseY <=250){
  //   image(f1book, 0,0);
  //   textFiller = "book";
  // } else
  // if(mouseX >=325 && mouseX <=725 && mouseY >= 300 && mouseY <=550){
  //   image(f1monitor, 0,0);
  //   textFiller = "monitor";
  // } else
  // if(mouseX >=775 && mouseX <=975 && mouseY >= 575 && mouseY <=875){
  //   image(f1drawer, 0,0);
  //   textFiller = "drawers";
  // } else {
  //   image(t1a,0,0, 1200, 900);
  //   textFiller = "";
  // };

  if(mouseX >25 && mouseX <250 && mouseY > 10 && mouseY <135){
    image(t1b1, 0,0);
    textHeader = "sun";
    textFiller = "The presence of a light source is necessary for worship. While natural light is preferable, the foundation of artificial Day Stars is pleasing to the Deity, and is known to attract good fortune to the altar.";
  } else
  // if(mouseX >=600 && mouseX <=800 && mouseY >= 50 && mouseY <=200){
  //   image(t1f2, 0,0);
  //   textHeader = "books";
  //   textFiller = "books Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // } else
  if(mouseX >375 && mouseX <855 && mouseY > 210 && mouseY <510){
    image(t1b2, 0,0);
    textHeader = "monitor";
    textFiller = "The portal through which the Deity sends visions. Sometimes visions of great beauty, and others great horror, it most often shows a phantasmagoria of information that is indeciferable to all but the most experienced of visiers. For now, it shows only darkness.";
  } else
  if(mouseX >900 && mouseX <1190 && mouseY >340 && mouseY <660){
    image(t1b3, 0,0);
    textHeader = "storage";
    textFiller = "No altar is complete without the trappings and commestibles of good offering. Keep handy any perishable goods, paper sigils, or personal effects of the Deity nearby in case of imminent need. Sacrificial goats not included.";
  } else
  if(mouseX >150 && mouseX <900 && mouseY > 700 && mouseY <800){
    image(t1b4, 0,0);
    textHeader = "worship";
    textFiller = "Busy hands make for studious worship. Here, the lines of contemplation may be drawn; Here, the cup of wisdom may be filled; Here, thy work be done.";
  } else {
    image(t1b,0,0, 1200, 900);
    textHeader = "";
    textFiller = "";
  };
  //background(128);
  textSize(42);
  textFont(hFont);
text(textHeader, 100, 340);
textSize(18);
textFont(bFont);
  text(textFiller, 80, 400, 210, 300);

  //image(img,mouseX-25,mouseY-25,50,50);

//noCursor();
}
