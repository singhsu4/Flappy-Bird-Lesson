const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");
//we will need the gamecontainer to make the game blurry
//when we display the end menu
const gameContainer = document.getElementById('game-container');

const flappyImg = new Image();
flappyImg.src = 'assets/Flappy_dunk.png';

//game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

//bird variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.1;

//Pipe Variables
let pipeX = 400;
let pipeY = canvas.height - 200;

//score and hightscore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highScore = 0;

//we add a bool variable, so we can check when flappy passes we increase the value
let scored = false;


//lets us control the bird with the space key
document.body.onkeyup = function (e) {
    if (e.code == 'Space') {
        birdVelocity = FLAP_SPEED;
    }
}

//lets us restart the game if we hit game over
document.getElementById('restart-button') / addEventListener('click', function ()
    hideEndMenu();
resetGame();
loop();
})



function increaseScore() {
    //increase how our counter when our flappy passees the pipes
    if (birdx > pipeX + PIPE_WIDTH &&
        )
}

function collisionCheck() {

    //todo
}

function hideEndMenu() {
    document.getElementById('end-menu').style.display = 'none';
    gameContainer.classList.remove('backdrop-blur');
}

function showEndMenu() {
    document.getElementById('end-menu').style.display = 'block';
    gameContainer.classList.add('backdrop-blue');
    document.getElementById('end-score').innerHTML = score;
}

function resetGame() {
    //TODO
}

function endGame() {
    //TODO;
}

function loop() {
    //reset the ctx after every loop iteration
    ctx.clearRect(0, 0, canvas.Width, canvas.height);

    //draw Flappy Bird
    ctx.drawImage(flappyImg, birdX, birdY);

    //drawpipes
    ctx.fillstyle = '#333';
    ctx.fillRect(pipeX, - 100, PIPE_WIDTH, pipeY);
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY);

    //forgot to move the pipes
    pipeX -= 1.5;


    birdVelocity += birdAcceleration;
    birdY += birdVelocity;

    requestAnimationFrame(loop);
}

loop();

