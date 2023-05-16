let data, url; 
let itemNum;

let latitudes = [];
let longitudes = [];

let xCoords = [];
let yCoords = [];


function preload(){
  url= "data.json";
  data = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data);
}

function draw() {
  background(220);
  

  itemNum = Object.keys(data).length;
  
  for(let i = 0; i < itemNum; i++){
    latitudes[i] = data[i].Latitude;
    longitudes[i] = data[i].Longitude;
    
    xCoords[i] = map(longitudes[i], -122.28, -90.708, 0, windowWidth);
    yCoords[i] = map(latitudes [i], 22.558, 42.821, 0, windowHeight);
    

    fill("#009688")
    strokeWeight(4);
    stroke(51);
stroke(80, 150, 255);
    
    
    circle(xCoords[i], yCoords[i], 10);

  
  
  //console.log(xCoords[0]);
  //console.log(latitudes);
  }
}