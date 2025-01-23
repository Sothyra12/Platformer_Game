// script.js

const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p"); // Get the paragraph element inside the checkpoint screen
// Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element
// getContext method which will provide the context for where the graphics will be rendered
const ctx = canvas.getContext("2d");
// innerWidth property is a number that represents the interior width of the browser window.
canvas.width = innerWidth;
// innerHeight property is a number that represents the interior height of the browser window.
canvas.height = innerHeight;
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

// class to define some characteristics for the main player of the game
class Player {
  // define the player's position, velocity, width, and height values. All of these values will be defined inside the constructor method.
  constructor() {
    this.position = {
        // use the proportionalSize function here to make sure that the player's position is always proportional to the screen size. 
        // This is important because you want the player to be able to move around the screen regardless of the screen size
      x: proportionalSize(10),
      y: proportionalSize(400),
    };

    // store the player's speed in x and y directions
    this.velocity = {
        x: 0,
        y: 0,
      };
    
    // using the proportionalSize() function here to set the width and height properties of your class to be proportional to the height of the screen.
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }
}
