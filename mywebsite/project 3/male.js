let woodTexture;

function preload() {
  woodTexture = loadImage('wood_texture4.jpeg'); // load the wood texture image
}

function setup() {
  createCanvas(windowWidth, windowHeight/2, WEBGL);
  

    Fgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Fgraphics.textAlign(CENTER, CENTER);
    Fgraphics.textSize(65);
    Fgraphics.textStyle(BOLD);
    Fgraphics.fill(128, 0, 128);
    Fgraphics.text("F", 50, 50);
    stroke(128, 0, 128);
    strokeWeight(2);

    Egraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Egraphics.textAlign(CENTER, CENTER);
    Egraphics.textSize(65);
    Egraphics.textStyle(BOLD);
    Egraphics.fill(255, 165, 0);
    Egraphics.text("E", 50, 50)
    stroke(255, 165, 0);
    strokeWeight(2);

    Mgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Mgraphics.textAlign(CENTER, CENTER);
    Mgraphics.textSize(65);
    Mgraphics.textStyle(BOLD);
    Mgraphics.fill(255, 105, 180);
    Mgraphics.text("M", 50, 50)
    stroke(255, 105, 180);
    strokeWeight(2);

    Aagraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Aagraphics.textAlign(CENTER, CENTER);
    Aagraphics.textSize(65);
    Aagraphics.textStyle(BOLD);
    Aagraphics.fill(135, 206, 235);
    Aagraphics.text("A", 50, 50)
    stroke(135, 206, 235);
    strokeWeight(2);

    Lgraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Lgraphics.textAlign(CENTER, CENTER);
    Lgraphics.textSize(65);
    Lgraphics.textStyle(BOLD);
    Lgraphics.fill(0, 100, 0);
    Lgraphics.text("L", 50, 50)
    stroke(0, 100, 0);
    strokeWeight(2);

    Eegraphics = createGraphics(100, 100);

    // Set the text properties for the graphics buffer
    Eegraphics.textAlign(CENTER, CENTER);
    Eegraphics.textSize(65);
    Eegraphics.textStyle(BOLD);
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

    // // create a Graphics that contains our text
    // textScreen = createGraphics(800,400) 

    // // style the graphics however we need
    // // all the styles should be applied separately to this new graphics
    // // done by writing out "graphicsName." <-- then put the p5 rule after the period
    // textScreen.textSize(width/9);
    // textScreen.textAlign(CENTER, CENTER);
    // textScreen.background(255,0,0)
    // textScreen.fill('black')
    // //textScreen.background(255)
    // textScreen.text("POPULAR", textScreen.width/2, textScreen.height/2)
    
}

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

  let maxCubes = 100;
  let cubeCount = 0;
  background(255);
  

  push();
  stroke(128, 0, 128);
  translate(-420, 10, -10, 0);
  rotateX(cube8RotX);
  rotateY(cube8RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Fgraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 165, 0);
  translate(-260, 5, -10, 0);
  rotateX(cube9RotX);
  rotateY(cube9RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Egraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 105, 180);
  translate(-100, 10, -10, 0);
  rotateX(cube10RotX);
  rotateY(cube10RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Mgraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(135, 206, 235);
  translate(40, 5, -10, 0);
  rotateX(cube11RotX);
  rotateY(cube11RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Aagraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 100, 0);
  translate(200, 10, -10, 0);
  rotateX(cube13RotX);
  rotateY(cube13RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Lgraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 255, 0);
  translate(380, 5, -10, 0);
  rotateX(cube14RotX);
  rotateY(cube14RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Eegraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(139, 0, 0);
  translate(-330, 700, 10, 0);
  rotateX(cube15RotX);
  rotateY(cube15RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Mmgraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 191, 255);
  translate(-130, 710, 0, 0);
  rotateX(cube16RotX);
  rotateY(cube16RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Aaagraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(255, 69, 0);
  translate(55, 700, 0, 0);
  rotateX(cube17RotX);
  rotateY(cube17RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Llgraphics);
  box(130);
  strokeWeight(2);
  pop();

  push();
  stroke(0, 0, 128);
  translate(240, 705, 10, 0);
  rotateX(cube18RotX);
  rotateY(cube18RotY);
  texture(woodTexture); // apply the wood texture to the cube  
  box(130);
  texture(Eeegraphics);
  box(130);
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
        cube8RotX += (pmouseY - mouseY) * 0.01;
        cube8RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube9RotX += (pmouseY - mouseY) * 0.01;
        cube9RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube10RotX += (pmouseY - mouseY) * 0.01;
        cube10RotY += (pmouseX - mouseX) * 0.01;
    }
    if (mouseX < 300 && mouseY < 300) {
        cube11RotX += (pmouseY - mouseY) * 0.01;
        cube11RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 400 && mouseY < 400) {
        cube12RotX += (pmouseY - mouseY) * 0.01;
        cube12RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube13RotX += (pmouseY - mouseY) * 0.01;
        cube13RotY += (pmouseX - mouseX) * 0.01;  
    }
    if (mouseX < 1400 && mouseY < 8014000) {
        cube14RotX += (pmouseY - mouseY) * 0.01;
        cube14RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 1500 && mouseY < 1500) {
        cube15RotX += (pmouseY - mouseY) * 0.01;
        cube15RotY += (pmouseX - mouseX) * 0.01;
    } else {
        cube16RotX += (pmouseY - mouseY) * 0.01;
        cube16RotY += (pmouseX - mouseX) * 0.01;  
    }
    if (mouseX < 1400 && mouseY < 1400) {
        cube17RotX += (pmouseY - mouseY) * 0.01;
        cube17RotY += (pmouseX - mouseX) * 0.01;
    } else if (mouseX < 1500 && mouseY < 1500) {
        cube18RotX += (pmouseY - mouseY) * 0.01;
        cube18RotY += (pmouseX - mouseX) * 0.01;
    }
}

