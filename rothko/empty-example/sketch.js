// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />
var zeme;
var venuse;
var merkur;
var mars;
var jupiter;
var saturn;
var uran;



function setup() {
  createCanvas(400, 400);
 
  zeme = createVector(0, 100);
  
  venuse = createVector(0, 80);
  
  merkur = createVector(0, 60);
  mars = createVector(0, 120);
  jupiter = createVector(0, 170);
  saturn = createVector(0, 190);
  uran = createVector(0, 200);
  prstenec = createVector(0, 190);
  
  
}

function draw() { 
  background("#262626");
  translate(200, 200);
  fill("#F7FE2E");
  ellipse(0, 0, 100);

  zeme.rotate(0.02);
  venuse.rotate(-0.02);
  merkur.rotate(0.03);
  mars.rotate(-0.02);
  jupiter.rotate(0.01);
  saturn.rotate(-0.01);
  uran.rotate(0.008);
  prstenec.rotate(-0.01);
  

  fill("#01DFD7");
  ellipse(zeme.x, zeme.y, 10);
  fill("#61380B");
  ellipse(venuse.x,venuse.y, 11);
  fill("#FE9A2E");
  ellipse(merkur.x, merkur.y, 8);
fill("#B40404")
  ellipse(mars.x, mars.y, 12);
  fill("#FF8000")
  ellipse(jupiter.x, jupiter.y, 23);
  fill("#ff9900");
  ellipse(saturn.x, saturn.y, 21);
  fill("#336699");
  ellipse(uran.x, uran.y, 14);
  fill("#ff9900");
  ellipse(prstenec.x, prstenec.y, 45, 3);
 


 }
 
 
  
  // put drawing code here
