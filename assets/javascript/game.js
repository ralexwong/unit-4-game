// create variables that equal 0 for random and total score
// create onclick button functions for each element
// have them randomize every round
// if the totalscore > randomscore then = lose


var wins = 0;
var losses = 0;
var totalscore = 0;


// randomizes each elements number every round

function resetRound() {

    wind = Math.floor((Math.random() * 12) + 1);
    earth = Math.floor((Math.random() * 12) + 1);
    water = Math.floor((Math.random() * 12) + 1);
    fire = Math.floor((Math.random() * 12) + 1);

    randomnumber = Math.floor((Math.random() *(120-19+1) + 19));

    console.log(wind);
    console.log(randomnumber);

    totalscore = 0
    document.getElementById("totalscorebox").innerHTML = "";
    document.getElementById("randomnumber").innerHTML = randomnumber;
}

// starts the first round

window.onload = function() { 
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("wins").innerHTML = wins;
    resetRound();
}


$(document).ready(function(){
    $("#wind").on("click", function() {
        totalscore = totalscore + wind;
        document.getElementById("totalscorebox").innerHTML = totalscore;
        loser();
        winner();
        console.log(totalscore);
    });
});

$(document).ready(function(){
    $("#earth").on("click", function() {
        totalscore = totalscore + earth;
        document.getElementById("totalscorebox").innerHTML = totalscore;
        loser();
        winner();
    });
});

$(document).ready(function(){
    $("#water").on("click", function() {
        totalscore = totalscore + water;
        document.getElementById("totalscorebox").innerHTML = totalscore;
        loser();
        winner();
    });
});

$(document).ready(function(){
    $("#fire").on("click", function() {
        totalscore = totalscore + fire;
        document.getElementById("totalscorebox").innerHTML = totalscore;
        loser();
        winner();
    });
});


function loser(){
    if (totalscore > randomnumber) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("Too high :( you have not mastered the elements");
        resetRound();
    }
}

function winner() {
    if (totalscore == randomnumber) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("You won :)");
        resetRound();
    }
}