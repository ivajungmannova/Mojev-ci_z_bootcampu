// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />
var clicks = 10;
var keys = 15;
var time = 10;
var timespeed = 1;
var mycolor = 0;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
 
}

function draw() {
  time = time + timespeed;
  var ellipseOffset = time % 400;
  var mycolor = time % 400;
  if (ellipseOffset>30) {
    background(0);
}else{
  background(160, 23, 57, 59);
  
    }
    if (keyIsPressed) {
      timespeed = 10;
    } else {
      timespeed = 1;
    }
  background(50);
  fill(50, 100, 80);
  ellipse(ellipseOffset, 56, 58 + clicks, 60 + keys);
  fill(mycolor, 100, 100);
  triangle(260, 300, 330, 100, 70 + clicks, 120 + keys);
  fill("white");
  rect(80, 320, 90 + clicks, 80 + clicks, 20);
  fill("orange");

  arc(100, 120, 80 + keys, 80 + clicks, 0, PI + QUARTER_PI);
 
  
  
  
  // put drawing code here
}
function mouseReleased() {
  clicks = clicks + 8;
}
function keyReleased() {
  keys = keys + 8;
}