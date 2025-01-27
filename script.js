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

  draw() {
    // fillStyle property is used to set the color of the player
    ctx.fillStyle = "#99c9ff";
    // fillRect method to draw the player shape on the screen
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    if (this.position.x >= canvas.width - this.width * 2) {
      this.position.x = canvas.width - this.width * 2;
    }
  }
}

const player = new Player();

const animate = () => {
  // The requestAnimationFrame() web API, takes in a callback and is used to update the animation on the screen. 
  // The animate function will be responsible for updating the player's position and continually drawing it on the canvas.
  requestAnimationFrame(animate);
  // clearRect method to clear the canvas before drawing the player again
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}

const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  player.draw();
}

startBtn.addEventListener("click", startGame);