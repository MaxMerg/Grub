//canvas variables
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//Audio Variables
var voice = document.getElementById("voice");

function PlaySound() {
    voice.play();
}

//image variables 
var grubb = document.getElementById("grubb");
var background = document.getElementById("background");

var tempX = 0;
var tempY = 0;

//time variables
initial = false; 

start();

function start() {
    //draws the center starting grubb
    ctx.drawImage(grubb, 446, 221, 54, 61);
    initial = true;
    voice.play();
}

function playScreen() {
    //ctx.drawImage(background, 0, 0, 1000, 564);
    tempX = Math.random()*940;
    tempY = Math.random()*500;

    ctx.drawImage(grubb, tempX, tempY, 54, 61);
    PlaySound();
}

//listens for key presses and moves the ship accordingly
window.addEventListener("click", mouseDown, false);
function mouseDown(e) {
    if (e.clientX <= 500 && e.clientX >= 446 && e.clientY >= 221 && e.clientY <= 564 && initial == true) {
        ctx.clearRect(446, 221, 54, 61);
        initial = false;

        playScreen();
    }
    else if (e.clientX <= tempX + 54 && e.clientX >= tempX && e.clientY >= tempY && e.clientY <= tempY + 61 && initial == false) {
        ctx.clearRect(tempX, tempY, 54, 61);
        playScreen();
    }
}



//38 = upArrow
//39 = rightArrow
//40 = downArrow
//37 = leftArrow

//W = 87
//A = 65
//S = 83
//D = 68

//32 = spacebar
//82 = "r"

