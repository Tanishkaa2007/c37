//creating the global variables
var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  //loading the images
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //the values of the firbase are store in the variable database
  database = firebase.database();
  //a new game object is created
  game = new Game();
  //the getState function is intialised 
  game.getState();
  //the start function is initialised
  game.start();
}

function draw() {
  background(backgroundImage);
  //if condition states that if the player count is equal to 2 then the game state will be updated to 1(play game state)
  if (playerCount === 2) {
    game.update(1);
  }

  //the condition states that if the gamestate is 1 the the play function initialised
  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  //the size of the canvas is resized depending upon the dimensions of the user's screen 
  resizeCanvas(windowWidth, windowHeight);
}
