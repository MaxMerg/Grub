//canvas variables
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//Audio Variables
var voice = document.getElementById("voice");

//image variables 
var grubb = document.getElementById("grubb");
var background = document.getElementById("background");

var tempX = 0;
var tempY = 0;

//location variables
spotx1 = 135 -51; 
spotx2 = 221 -51; 
spotx3 = 308 -51; 
spotx4 = 235 -51; 
spotx5 = 379 -51; 
spotx6 = 348 -51; 
spotx7 = 458 -51; 
spotx8 = 682 -51; 
spotx9 = 780 -51; 
spotx10 = 829 - 51; 
spotx11 = 758 -51; 
spotx12 = 646 -51; 

spoty1 = 340 -51;
spoty2 = 240 -51;
spoty3 = 171 -51;
spoty4 = 312 -51;
spoty5 = 256 -51;
spoty6 = 384 -51;
spoty7 = 344 -51;
spoty8 = 290 -51;
spoty9 = 245 -51;
spoty10 = 353 -51;
spoty11 = 414 -51;
spoty12 = 357 -51;

//time variables
initial = false; 

var sound1 = 23;
var sound2 = 13;
var sound3 = 9;
var sound4 = 3;

var current = 0;

//starts the program 
start();

//waits for the user to click the center grubb
function start() {
    //draws the center starting grubb
    ctx.drawImage(grubb, 400, 175, 184, 178);
    initial = true;
    voice.play();
}

//sets the stage for the game screen and moving grubs
function playScreen() {
    ctx.drawImage(background, 0, 0, 1000, 564);
    tempX = Math.ceil(Math.random()*12);

    console.log(tempX);
    
    if (tempX == 1) {
        ctx.drawImage(grubb, spotx1, spoty1, 92, 89);
    }
    else if (tempX == 2) {
        ctx.drawImage(grubb, spotx2, spoty2, 92, 89);
    }
    else if (tempX == 3) {
        ctx.drawImage(grubb, spotx3, spoty3, 92, 89);
    }
    else if (tempX == 4) {
        ctx.drawImage(grubb, spotx4, spoty4, 92, 89);
    }
    else if (tempX == 5) {
        ctx.drawImage(grubb, spotx5, spoty5, 92, 89);
    }
    else if (tempX == 6) {
        ctx.drawImage(grubb, spotx6, spoty6, 92, 89);
    }
    else if (tempX == 7) {
        ctx.drawImage(grubb, spotx7, spoty7, 92, 89);
    }
    else if (tempX == 8) {
        ctx.drawImage(grubb, spotx8, spoty8, 92, 89);
    }
    else if (tempX == 9) {
        ctx.drawImage(grubb, spotx9, spoty9, 92, 89);
    }
    else if (tempX == 10) {
        ctx.drawImage(grubb, spotx10, spoty10, 92, 89);
    }
    else if (tempX == 11) {
        ctx.drawImage(grubb, spotx11, spoty11, 92, 89);
    }
    else {
        ctx.drawImage(grubb, spotx12, spoty12, 92, 89);
    }

    PlaySound();
}

//Plays sound at random sound intervals
function PlaySound() {
    current = Math.ceil(Math.random()*4);
    console.log(current);
    voice.currentTime = current;

    if (current == 1) {
        voice.currentTime = sound1;
        voice.play();
    }
    else if (current == 2) {
        voice.currentTime = sound2;
        voice.play();
    }
    else if (current == 3) {
        voice.currentTime = sound3;
        voice.play();
    }
    else {
        voice.currentTime = sound4;
        voice.play();
    }

    //ends the sounds when they are finished
    setInterval(function(){
        if (current == 1) {
            if(voice.currentTime > 24.92) {
                voice.pause();
            }
        }
        else if (current == 2) {
            if(voice.currentTime > 14) {
                voice.pause();
            }
        }
        else if (current == 3) {
            if(voice.currentTime > 11) {
                voice.pause();
            }
        }
        else {
            if (voice.currentTime > 4.5) {
                voice.pause();
            }
        }
		
	},
    
    1000);
		
}


//listens for key presses and moves the ship accordingly
window.addEventListener("click", mouseDown, false);
function mouseDown(e) {
    console.log(e.clientX, e.clientY);
    if (e.clientX <= 525 && e.clientX >= 475 && e.clientY >= 225 && e.clientY <= 325 && initial == true) {
        initial = false;

        playScreen();
    }
    else if (e.clientX <= spotx1 + 70 && e.clientX >= spotx1 + 25 && e.clientY >= spoty1 + 25 && e.clientY <= spoty1 + 78 && initial == false && tempX == 1) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx2 + 70 && e.clientX >= spotx2 + 25 && e.clientY >= spoty2 + 25 && e.clientY <= spoty2 + 78 && initial == false && tempX == 2) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx3 + 70 && e.clientX >= spotx3 + 25 && e.clientY >= spoty3 + 25 && e.clientY <= spoty3 + 78 && initial == false && tempX == 3) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx4 + 70 && e.clientX >= spotx4 + 25 && e.clientY >= spoty4 + 25 && e.clientY <= spoty4 + 78 && initial == false && tempX == 4) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx5 + 70 && e.clientX >= spotx5 + 25 && e.clientY >= spoty5 + 25 && e.clientY <= spoty5 + 78 && initial == false && tempX == 5) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx6 + 70 && e.clientX >= spotx6 + 25 && e.clientY >= spoty6 + 25 && e.clientY <= spoty6 + 78 && initial == false && tempX == 6) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx7 + 70 && e.clientX >= spotx7 + 25 && e.clientY >= spoty7 + 25 && e.clientY <= spoty7 + 78 && initial == false && tempX == 7) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx8 + 70 && e.clientX >= spotx8 + 25 && e.clientY >= spoty8 + 25 && e.clientY <= spoty8 + 78 && initial == false && tempX == 8) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx9 + 70 && e.clientX >= spotx9 + 25 && e.clientY >= spoty9 + 25 && e.clientY <= spoty9 + 78 && initial == false && tempX == 9) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx10 + 70 && e.clientX >= spotx10 + 25 && e.clientY >= spoty10 + 25 && e.clientY <= spoty10 + 78 && initial == false && tempX == 10) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx11 + 70 && e.clientX >= spotx11 + 25 && e.clientY >= spoty11 + 25 && e.clientY <= spoty11 + 78 && initial == false && tempX == 11) {
        ctx.clearRect(tempX, tempY, 92, 89);
        playScreen();
    }
    else if (e.clientX <= spotx12 + 70 && e.clientX >= spotx12 + 25 && e.clientY >= spoty12 + 25 && e.clientY <= spoty12 + 78 && initial == false && tempX == 12) {
        ctx.clearRect(tempX, tempY, 92, 89);
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


//hey riley :)

