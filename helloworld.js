//hey ry
//i love ya you nerd





//screens and questions
var screen = 0; 

//submit button
var submit = document.getElementById("submit");

//text box 
var textBox = document.getElementById("answer");
var answer;

//resets the value of the textbox 
function reset() {
    textBox.value = "";
}

//displays the first question
function q1() {
    reset();
    document.getElementById("intro").style.display = "none";
    document.getElementById("first").style.display = "block";
}

//displays the second question
function q2() {
    reset();
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

//displays the third question
function q3() {
    reset();
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}

//displays the fourth question
function q4() {
    reset();
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "block";
}

//displays the fifth question
function q5() {
    reset();
    document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
}


//displays the sixth question
function q6() {
    reset();
    document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";
}

//displays the seventh question
function q7() {
    reset();
    document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
}

//displays the eighth question
function q8() {
    reset();
    document.getElementById("seventh").style.display = "none";
    document.getElementById("eighth").style.display = "block";
}


//displays the ninth question
function q9() {
    reset();
    document.getElementById("eighth").style.display = "none";
    document.getElementById("ninth").style.display = "block";
}


//displays the tenth question
function q10() {
    reset();
    document.getElementById("ninth").style.display = "none";
    document.getElementById("tenth").style.display = "block";
}


//displays the eleventh question
function q11() {
    reset();
    document.getElementById("tenth").style.display = "none";
    document.getElementById("eleventh").style.display = "block";
}


//displays the twelfth question
function q12() {
    reset();
    document.getElementById("eleventh").style.display = "none";
    document.getElementById("twelfth").style.display = "block";
}


//displays the thirteenth question
function q13() {
    reset();
    document.getElementById("twelfth").style.display = "none";
    document.getElementById("thirteenth").style.display = "block";
}


//displays the fourteenth question
function q14() {
    reset();
    document.getElementById("thirteenth").style.display = "none";
    document.getElementById("fourteenth").style.display = "block";
}


//displays the fifteenth question
function q15() {
    reset();
    document.getElementById("intro").style.display = "none";
    document.getElementById("fourteenth").style.display = "none";
    document.getElementById("fifteenth").style.display = "block";
}

//this unlocks the gallery and free mode
function freePlay() {
    reset();
    document.getElementById("submit").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementsByTagName("h4")[0].style.display = "none";

    document.getElementById("gallery").style.display = "block";

    document.getElementById("gal1").style.display = "block";
    document.getElementById("gal2").style.display = "block";
    document.getElementById("gal3").style.display = "block";
    document.getElementById("gal4").style.display = "block";
}

//displays when ALL ANSWERS ARE CORRECT
function finale() {
    reset();
    document.getElementById("fifteenth").style.display = "none";
    alert("LETS FUCKING GOOOOO SHE SIAD YESSS WEEEEE YIPEEEE I AM SO EXCITED!!!");
    freePlay();
}

//activates when the submit button is pressed
function submission() {

    //stores whatever is inside the text box
    answer = textBox.value.toLowerCase();
    
    //checks to see if the answer is correct depending on question
    if (screen == 0 && answer == "c") {
        screen = screen + 15;
        q15();
    }
    else if (screen == 0) {
        screen++;
        q1();
    }
    else if (screen == 1 && (answer == "ripper")) {
        screen++;
        q2();
    }
    else if (screen == 2 && (answer == "physics")) {
        screen++; 
        q3();
    }
    else if (screen == 3 && (answer == "edgewood" || answer == "edgewood elementary school" || answer == "edgewood elementary")) {
        screen++;
        q4();
    }
    else if (screen == 4 && (answer == "springfield diner")) {
        screen++;
        q5();
    }
    else if (screen == 5 && (answer == "something stupid" || answer == "somethin stupid" || answer == "somethin' stupid")) {
        screen++;
        q6();
    }
    else if (screen == 6 && (answer == "greg")) {
        screen++;
        q7();
    }
    else if(screen == 7 && (answer == "heath" || answer == "heathcliff")) {
        screen++;
        q8();
    }
    else if(screen == 8 && (answer == "yes" || answer == "of course" || answer == "yes!")) {
        screen++;
        q9();
    }
    else if(screen == 8 && (answer == "no")) {
        alert("You lose because you know I would love you if you were a worm :( ")
        location.reload();
    }
    else if(screen == 9 && (answer == "me" || answer == "i am")) {
        screen++;
        q10();
    }
    else if(screen == 10 && (answer == "chai" || answer == "chai tea" || answer == "tea")) {
        screen++;
        q11();
    }
    else if(screen == 11 && (answer == "mario golf" || answer == "metroid" || answer == "super metroid")) {
        screen++;
        q12();
    }
    else if(screen == 12 && (answer == "rhombus")) {
        screen++;
        q13();
    }
    else if(screen == 13 && (answer == "dior")) {
        screen++;
        q14();
    }
    else if(screen == 14 && (answer == "uncle bill's" || answer == "uncle bill's" || answer == "uncle bills pancake house" || answer == "uncle bill's pancake house")) {
        screen++;
        q15();
    }
    else if(screen == 15 && (answer == "yes")) {
        screen++;
        finale();
    }

}

//Checks to see if the submit button has been pressed
submit.addEventListener("click", submission);

//metal note for 15
//document.getElementById("fifteenth").removeAttribute("hidden")
