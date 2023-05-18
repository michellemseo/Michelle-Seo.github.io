let woodTexture;

function preload() {
  woodTexture = loadImage('wood_texture4.jpeg'); // load the wood texture image
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); 

    // Create a graphics buffer the same size as the cube
    Ngraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ngraphics.textAlign(CENTER, CENTER);
    Ngraphics.textSize(65);
    Ngraphics.textStyle(BOLD);
    Ngraphics.fill(46, 204, 113);
    Ngraphics.text("N", 50, 50)
    stroke(46, 204, 113);
    strokeWeight(2);
    
    Ygraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ygraphics.textAlign(CENTER, CENTER);
    Ygraphics.textSize(65);
    Ygraphics.textStyle(BOLD);
    Ygraphics.fill(255, 0, 0);
    Ygraphics.text("Y", 50, 50)
    stroke(255, 0, 0);
    strokeWeight(2);

    Cgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Cgraphics.textAlign(CENTER, CENTER);
    Cgraphics.textSize(65);
    Cgraphics.textStyle(BOLD);
    Cgraphics.fill(0,0,128);
    Cgraphics.text("C", 50, 50)
    stroke(0,0,128);
    strokeWeight(2);

    Pgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Pgraphics.textAlign(CENTER, CENTER);
    Pgraphics.textSize(65);
    Pgraphics.fill(0, 0, 0);
    Pgraphics.text("P", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);

    Ographics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ographics.textAlign(CENTER, CENTER);
    Ographics.textSize(65);
    Ographics.fill(0, 0, 0);
    Ographics.text("O", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);

    Ppgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ppgraphics.textAlign(CENTER, CENTER);
    Ppgraphics.textSize(65);
    Ppgraphics.fill(0, 0, 0);
    Ppgraphics.text("P", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);

    Ugraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ugraphics.textAlign(CENTER, CENTER);
    Ugraphics.textSize(65);
    Ugraphics.fill(0, 0, 0);
    Ugraphics.text("U", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);

    Lllgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Lllgraphics.textAlign(CENTER, CENTER);
    Lllgraphics.textSize(65);
    Lllgraphics.fill(0, 0, 0);
    Lllgraphics.text("L", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);

    Aaaagraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Aaaagraphics.textAlign(CENTER, CENTER);
    Aaaagraphics.textSize(65);
    Aaaagraphics.fill(0, 0, 0);
    Aaaagraphics.text("A", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);

    Rgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Rgraphics.textAlign(CENTER, CENTER);
    Rgraphics.textSize(65);
    Rgraphics.fill(0, 0, 0);
    Rgraphics.text("R", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);


    Bgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Bgraphics.textAlign(CENTER, CENTER);
    Bgraphics.textSize(65);
    Bgraphics.textStyle(BOLD);
    Bgraphics.fill(255, 69, 0);
    Bgraphics.text("B", 50, 50)
    stroke(255, 69, 0);
    strokeWeight(2);

    Agraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Agraphics.textAlign(CENTER, CENTER);
    Agraphics.textSize(65);
    Agraphics.textStyle(BOLD);
    Agraphics.fill(255, 165, 0);
    Agraphics.text("A", 50, 50);
    stroke(255, 165, 0);
    strokeWeight(2);

    Bbgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Bbgraphics.textAlign(CENTER, CENTER);
    Bbgraphics.textSize(65);
    Bbgraphics.textStyle(BOLD);
    Bbgraphics.fill(255, 255, 0);
    Bbgraphics.text("B", 50, 50)
    stroke(255, 255, 0);
    strokeWeight(2);


    Yygraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Yygraphics.textAlign(CENTER, CENTER);
    Yygraphics.textSize(65);
    Yygraphics.textStyle(BOLD);
    Yygraphics.fill(0, 255, 0);
    Yygraphics.text("Y", 50, 50)
    stroke(0, 255, 0);
    strokeWeight(2);

    Nngraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Nngraphics.textAlign(CENTER, CENTER);
    Nngraphics.textSize(65);
    Nngraphics.fill(0,0,0);
    Nngraphics.text("N", 50, 50)
    Nngraphics.textStyle(BOLD);
    stroke(0,0,0);
    strokeWeight(2);

    Aagraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Aagraphics.textAlign(CENTER, CENTER);
    Aagraphics.textSize(65);
    Aagraphics.fill(0,0,0);
    Aagraphics.text("A", 50, 50)
    stroke(0,0,0);
    strokeWeight(2);

    Mgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Mgraphics.textAlign(CENTER, CENTER);
    Mgraphics.textSize(65);
    Mgraphics.fill(0,0,0);
    Mgraphics.text("M", 50, 50)
    stroke(0,0,0);
    strokeWeight(2);

    Eegraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Eegraphics.textAlign(CENTER, CENTER);
    Eegraphics.textSize(65);
    Eegraphics.fill(0,0,0);
    Eegraphics.text("E", 50, 50)
    stroke(0,0,0);
    strokeWeight(2);

    Sgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Sgraphics.textAlign(CENTER, CENTER);
    Sgraphics.textSize(65);
    Sgraphics.fill(0, 0, 0);
    Sgraphics.text("S", 50, 50)
    stroke(0, 0, 0);
    strokeWeight(2);
}

let cube1RotX= 0, cube1RotY = 0;
let cube2RotX= 0, cube2RotY = 0;
let cube3RotX =0, cube3RotY = 0;
let cube4RotX= 0, cube4RotY = 0;
let cube5RotX= 0, cube5RotY = 0;
let cube6RotX =0, cube6RotY = 0;
let cube7RotX =0, cube7RotY = 0;

let cube8RotX= 0, cube8RotY = 0;
let cube9RotX= 0, cube9RotY = 0;
let cube10RotX =0, cube10RotY = 0;
let cube11RotX= 0, cube11RotY = 0;
let cube12RotX= 0, cube12RotY = 0;

let cube19RotX= 0, cube19RotY = 0;
let cube20RotX= 0, cube20RotY = 0;
let cube21RotX= 0, cube21RotY = 0;
let cube22RotX= 0, cube22RotY = 0;
let cube23RotX= 0, cube23RotY = 0;
let cube24RotX= 0, cube24RotY = 0;
let cube25RotX= 0, cube25RotY = 0;


function draw() {

  let maxCubes = 100;
  let cubeCount = 0;
  background(255,255,255);

  
  push();
  stroke(46, 204, 113);
  translate(-230, -260, 0, 0);
  rotateX(cube1RotX);
  rotateY(cube1RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140)
  texture(Ngraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();

  push();
  stroke(255, 0, 0);
  translate(-20, -245, 0, 0);
  rotateX(cube2RotX);
  rotateY(cube2RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140);
  texture(Ygraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();

  push();
  stroke(0,0,128);
  translate(190, -260, 0, 0);
  rotateX(cube3RotX);
  rotateY(cube3RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140);
  texture(Cgraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();

  push();
  stroke(255, 69, 0);
  translate(-350, 70, 0, 0);
  rotateX(cube4RotX);
  rotateY(cube4RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140);
  texture(Bgraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();

  push();
  stroke(255, 165, 0);
  translate(-132, 70, 0, 0);
  rotateX(cube5RotX);
  rotateY(cube5RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140);
  texture(Agraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();

  push();
  stroke(255, 255, 0);
  translate(60, 70, 0, 0);
  rotateX(cube6RotX);
  rotateY(cube6RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140);
  texture(Bbgraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();

  push();
  stroke(0, 255, 0);
  translate(280, 70, 0, 0);
  rotateX(cube7RotX);
  rotateY(cube7RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(140);
  texture(Yygraphics);
  box(140);
  strokeWeight(2);
  textStyle(BOLD);
  pop();
  // drawCube(100); // Adjust the size of the cube as desired

  push();
  stroke(0, 0, 0);
  translate(-260, 240, 0, 0);
  rotateX(cube8RotX);
  rotateY(cube8RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Nngraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(-140, 245, 0, 0);
  rotateX(cube9RotX);
  rotateY(cube9RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Aagraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(-30, 240, 0, 0);
  rotateX(cube10RotX);
  rotateY(cube10RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Mgraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(80, 245, 0, 0);
  rotateX(cube11RotX);
  rotateY(cube11RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Eegraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(190, 240, 0, 0);
  rotateX(cube12RotX);
  rotateY(cube12RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Sgraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(-350, -88, 0, 0);
  rotateX(cube19RotX);
  rotateY(cube19RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Pgraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(-230, -80, 0, 0);
  rotateX(cube20RotX);
  rotateY(cube20RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Ographics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(-130, -85, 0, 0);
  rotateX(cube21RotX);
  rotateY(cube21RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Ppgraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(-30, -80, 0, 0);
  rotateX(cube22RotX);
  rotateY(cube22RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Ugraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(70, -85, 0, 0);
  rotateX(cube23RotX);
  rotateY(cube23RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Lllgraphics);
  box(85);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 0);
  translate(180, -82, 0, 0);
  rotateX(cube24RotX);
  rotateY(cube24RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Aaaagraphics);
  box(85);
  strokeWeight(2);
  pop();
  
  push();
  stroke(0, 0, 0);
  translate(300, -85, 0, 0);
  rotateX(cube25RotX);
  rotateY(cube25RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(85);
  texture(Rgraphics);
  box(85);
  strokeWeight(2);
  pop();


}
  
function windowResized(){
    resizeCanvas(windowWidth, WindowHeight);
}

  function mouseDragged() {
    // Rotate the cube based on mouse movement
    rotationX += (pmouseY - mouseY) * 0.01;
    rotationY += (pmouseX - mouseX) * 0.01;
    if (mouseX < 300 && mouseY < 300) {
        cube1RotX += (pmouseY - mouseY) * 0.01;
        cube1RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube2RotX += (pmouseY - mouseY) * 0.01;
        cube2RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube3RotX += (pmouseY - mouseY) * 0.01;
        cube3RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 300 && mouseY < 300) {
        cube4RotX += (pmouseY - mouseY) * 0.01;
        cube4RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube5RotX += (pmouseY - mouseY) * 0.01;
        cube5RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube6RotX += (pmouseY - mouseY) * 0.01;
        cube6RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 300 && mouseY < 300) {
        cube7RotX += (pmouseY - mouseY) * 0.01;
        cube7RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube8RotX += (pmouseY - mouseY) * 0.01;
        cube8RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube9RotX += (pmouseY - mouseY) * 0.01;
        cube9RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 300 && mouseY < 300) {
        cube10RotX += (pmouseY - mouseY) * 0.01;
        cube10RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube11RotX += (pmouseY - mouseY) * 0.01;
        cube11RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube12RotX += (pmouseY - mouseY) * 0.01;
        cube12RotY += (pmouseX - mouseX) * 0.01;  
    }
    if (mouseX < 300 && mouseY < 300) {
        cube19RotX += (pmouseY - mouseY) * 0.01;
        cube19RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube20RotX += (pmouseY - mouseY) * 0.01;
        cube20RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube21RotX += (pmouseY - mouseY) * 0.01;
        cube21RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 300 && mouseY < 300) {
        cube22RotX += (pmouseY - mouseY) * 0.01;
        cube1RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube23RotX += (pmouseY - mouseY) * 0.01;
        cube23RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube24RotX += (pmouseY - mouseY) * 0.01;
        cube24RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 300 && mouseY < 300) {
        cube21RotX += (pmouseY - mouseY) * 0.01;
        cube21RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube25RotX += (pmouseY - mouseY) * 0.01;
        cube25RotY += (pmouseX - mouseX) * 0.01;
    }
    
}