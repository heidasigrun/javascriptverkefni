/******************** LOKAVERKEFNI *********************/

/****************** VARIABLES *******************/

//canvas:
var canvas = document.getElementById("myCanvas");

//2D rendering context to paint on the Canvas:
var ctx = canvas.getContext("2d");

//define x and y:
var x = canvas.width / 2;
var y = canvas.height - 30;

//add value to x and y to make it appear that the ball is moving. 
var dx = 4;
var dy = -4;

//radius of the ball:
var ballRadius = 8;

//a paddle to hit the ball:
var paddleHeight = 8;
var paddleWidth = 70;
var paddleX = (canvas.width - paddleWidth) / 2;

//keyboard controls:
var rightPressed = false;
var leftPressed = false;

//bricks:
var brickRowCount = 6;
var brickColumnCount = 7;
var brickWidth = 70;
var brickHeight = 10;
var brickPadding = 10;
var brickOffsetTop = 35;
var brickOffsetLeft = 25;
var score = 0;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

//lives:
var lives = 3;

/****************** EVENT LISTENERS *******************/

//event listeners for keydown and keyup events:
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/****************** FUNCTIONS *******************/

//keydown events fire the keyDownHandler() function
//keyup events fire the keyUpHandler()
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

/* GET EKKI BREYTT ÞVÍ AÐ ÞAÐ ER MIÐJAN Á BOLTANUM 
SEM EYÐIR KUBBUNUM EN EKKI ALLUR BOLTINN */

//collision detection function to compare every single brick's position with 
//the ball's coordinates as each frame is drawn
//b variable = brick object
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount * brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

//draw the ball on the canvas
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#7CFC00';
    ctx.fill();
    ctx.closePath();
}

//draw the paddle on the canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#00FFFF";
    ctx.fill();
    ctx.closePath();
}

//draw the bricks on the canvas
function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status == 1 ){
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#FF00FF";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//draw the score on the canvas
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("SCORE  " + score, 25, 20);
}

//draw the lives on the canvas
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("LIVES  " + lives, canvas.width - 87, 20);
}

//requestAnimationFrame().
function draw() {
    //clears canvas so the ball won't leave a trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    //til að boltinn haldist inn í rammanum
    //ekki bara miðjupunkturinn heldur allur hringurinn
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 4;
                dy = -4;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 5;
    }
    //to make it appear that the ball is moving 
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();