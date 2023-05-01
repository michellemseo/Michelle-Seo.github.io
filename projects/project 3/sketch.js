let woodTexture;

function preload() {
  woodTexture = loadImage('wood_texture.jpeg'); // load the wood texture image
}

function setup() {
  createCanvas(windowWidth, 1900, WEBGL);

    // Create a graphics buffer the same size as the cube
    Ngraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ngraphics.textAlign(CENTER, CENTER);
    Ngraphics.textSize(65);
    Ngraphics.fill(46, 204, 113);
    Ngraphics.text("N", 50, 50)
    stroke(46, 204, 113);
    strokeWeight(2);
    
    Ygraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Ygraphics.textAlign(CENTER, CENTER);
    Ygraphics.textSize(65);
    Ygraphics.fill(255, 0, 0);
    Ygraphics.text("Y", 50, 50)
    stroke(255, 0, 0);
    strokeWeight(2);

    Cgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Cgraphics.textAlign(CENTER, CENTER);
    Cgraphics.textSize(65);
    Cgraphics.fill(0,0,128);
    Cgraphics.text("C", 50, 50)
    stroke(0,0,128);
    strokeWeight(2);

    Bgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Bgraphics.textAlign(CENTER, CENTER);
    Bgraphics.textSize(65);
    Bgraphics.fill(255, 69, 0);
    Bgraphics.text("B", 50, 50)
    stroke(255, 69, 0);
    strokeWeight(2);

    Agraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Agraphics.textAlign(CENTER, CENTER);
    Agraphics.textSize(65);
    Agraphics.fill(255, 165, 0);
    Agraphics.text("A", 50, 50);
    stroke(255, 165, 0);
    strokeWeight(2);

    Bbgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Bbgraphics.textAlign(CENTER, CENTER);
    Bbgraphics.textSize(65);
    Bbgraphics.fill(255, 255, 0);
    Bbgraphics.text("B", 50, 50)
    stroke(255, 255, 0);
    strokeWeight(2);


    Yygraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Yygraphics.textAlign(CENTER, CENTER);
    Yygraphics.textSize(65);
    Yygraphics.fill(0, 255, 0);
    Yygraphics.text("Y", 50, 50)
    stroke(0, 255, 0);
    strokeWeight(2);

    Fgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Fgraphics.textAlign(CENTER, CENTER);
    Fgraphics.textSize(65);
    Fgraphics.fill(128, 0, 128);
    Fgraphics.text("F", 50, 50)
    stroke(128, 0, 128);
    strokeWeight(2);

    Egraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Egraphics.textAlign(CENTER, CENTER);
    Egraphics.textSize(65);
    Egraphics.fill(255, 165, 0);
    Egraphics.text("E", 50, 50)
    stroke(255, 165, 0);
    strokeWeight(2);

    Mgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Mgraphics.textAlign(CENTER, CENTER);
    Mgraphics.textSize(65);
    Mgraphics.fill(255, 105, 180);
    Mgraphics.text("M", 50, 50)
    stroke(255, 105, 180);
    strokeWeight(2);

    Aagraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Aagraphics.textAlign(CENTER, CENTER);
    Aagraphics.textSize(65);
    Aagraphics.fill(135, 206, 235);
    Aagraphics.text("A", 50, 50)
    stroke(135, 206, 235);
    strokeWeight(2);

    Lgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Lgraphics.textAlign(CENTER, CENTER);
    Lgraphics.textSize(65);
    Lgraphics.fill(0, 100, 0);
    Lgraphics.text("L", 50, 50)
    stroke(0, 100, 0);
    strokeWeight(2);

    Eegraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Eegraphics.textAlign(CENTER, CENTER);
    Eegraphics.textSize(65);
    Eegraphics.fill(255, 255, 0);
    Eegraphics.text("E", 50, 50)
    stroke(255, 255, 0);
    strokeWeight(2);

    Mmgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Mmgraphics.textAlign(CENTER, CENTER);
    Mmgraphics.textSize(65);
    Mmgraphics.fill(139, 0, 0);
    Mmgraphics.text("M", 50, 50)
    stroke(139, 0, 0);
    strokeWeight(2);

    Aaagraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Aaagraphics.textAlign(CENTER, CENTER);
    Aaagraphics.textSize(65);
    Aaagraphics.fill(0, 191, 255);
    Aaagraphics.text("A", 50, 50)
    stroke(0, 191, 255);
    strokeWeight(2);

    Llgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Llgraphics.textAlign(CENTER, CENTER);
    Llgraphics.textSize(65);
    Llgraphics.fill(255, 69, 0);
    Llgraphics.text("L", 50, 50)
    stroke(255, 69, 0);
    strokeWeight(2);

    Eeegraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Eeegraphics.textAlign(CENTER, CENTER);
    Eeegraphics.textSize(65);
    Eeegraphics.fill(0, 0, 128);
    Eeegraphics.text("E", 50, 50)
    stroke(0, 0, 128);
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
let cube13RotX= 0, cube13RotY = 0;
let cube14RotX= 0, cube14RotY = 0;

let cube15RotX= 0, cube15RotY = 0;
let cube16RotX= 0, cube16RotY = 0;
let cube17RotX= 0, cube17RotY = 0;
let cube18RotX= 0, cube18RotY = 0;

// let cube13RotX =0, cube13RotY = 0;



function draw() {

  let maxCubes = 42;
  let cubeCount = 0;
  background(255);

  push();
  stroke(46, 204, 113);
  translate(-220, -800, 10, 0);
  rotateX(cube1RotX);
  rotateY(cube1RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110)
  texture(Ngraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 0, 0);
  translate(-20, -800, -10, 0);
  rotateX(cube2RotX);
  rotateY(cube2RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110)
  texture(Ygraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(0,0,128);
  translate(170, -800, 6, 0);
  rotateX(cube3RotX);
  rotateY(cube3RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Cgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 69, 0);
  translate(-240, -440, 20, 0);
  rotateX(cube4RotX);
  rotateY(cube4RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110)
  texture(Bgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 165, 0);
  translate(-90, -440, 0, 0);
  rotateX(cube5RotX);
  rotateY(cube5RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110)
  texture(Agraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 255, 0);
  translate(60, -440, -10, 0);
  rotateX(cube6RotX);
  rotateY(cube6RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Bbgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 255, 0);
  translate(215, -440, 6, 0);
  rotateX(cube7RotX);
  rotateY(cube7RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Yygraphics);
  box(110);
  strokeWeight(2);
  pop();
  // drawCube(100); // Adjust the size of the cube as desired

  push();
  stroke(128, 0, 128);
  translate(-340, 380, 10, 0);
  rotateX(cube8RotX);
  rotateY(cube8RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Fgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 165, 0);
  translate(-200, 380, 5, 0);
  rotateX(cube9RotX);
  rotateY(cube9RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Egraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 105, 180);
  translate(-70, 380, 10, 0);
  rotateX(cube10RotX);
  rotateY(cube10RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Mgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(135, 206, 235);
  translate(50, 380, 0, 0);
  rotateX(cube11RotX);
  rotateY(cube11RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Aagraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 100, 0);
  translate(180, 380, 0, 0);
  rotateX(cube13RotX);
  rotateY(cube13RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Lgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 255, 0);
  translate(308, 380, 10, 0);
  rotateX(cube14RotX);
  rotateY(cube14RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Eegraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(139, 0, 0);
  translate(-250, 700, 10, 0);
  rotateX(cube15RotX);
  rotateY(cube15RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Mmgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 191, 255);
  translate(-100, 700, 0, 0);
  rotateX(cube16RotX);
  rotateY(cube16RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Aaagraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 69, 0);
  translate(50, 700, 0, 0);
  rotateX(cube17RotX);
  rotateY(cube17RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Llgraphics);
  box(110);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 128);
  translate(200, 700, 10, 0);
  rotateX(cube18RotX);
  rotateY(cube18RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(110);
  texture(Eeegraphics);
  box(110);
  strokeWeight(2);
  pop();
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
    if (mouseX < 1400 && mouseY < 1400) {
        cube7RotX += (pmouseY - mouseY) * 0.01;
        cube7RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 1500 && mouseY < 1500) {
        cube8RotX += (pmouseY - mouseY) * 0.01;
        cube8RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube9RotX += (pmouseY - mouseY) * 0.01;
        cube9RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 1400 && mouseY < 1400) {
        cube10RotX += (pmouseY - mouseY) * 0.01;
        cube10RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 1500 && mouseY < 1500) {
        cube11RotX += (pmouseY - mouseY) * 0.01;
        cube11RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube12RotX += (pmouseY - mouseY) * 0.01;
        cube12RotY += (pmouseX - mouseX) * 0.01;  
    }
    if (mouseX < 1400 && mouseY < 8014000) {
        cube13RotX += (pmouseY - mouseY) * 0.01;
        cube13RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 1500 && mouseY < 1500) {
        cube14RotX += (pmouseY - mouseY) * 0.01;
        cube14RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube15RotX += (pmouseY - mouseY) * 0.01;
        cube15RotY += (pmouseX - mouseX) * 0.01;  
    }
    if (mouseX < 1400 && mouseY < 1400) {
        cube16RotX += (pmouseY - mouseY) * 0.01;
        cube16RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 1500 && mouseY < 1500) {
        cube17RotX += (pmouseY - mouseY) * 0.01;
        cube17RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube18RotX += (pmouseY - mouseY) * 0.01;
        cube18RotY += (pmouseX - mouseX) * 0.01;  
    }
}