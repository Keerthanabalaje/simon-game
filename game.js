var buttonColors = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});
function animatePress(currentColour) {
    $('#'+currentColour).addClass('pressed');
    setTimeout (function () {
        $('#'+currentColour).removeClass('pressed');   
    },100);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

var started = false;
var level = 0;

$(document).keypress(function () {
    if(!started){
        nextSequence();
        $('#level-title').text('Level '+ level);
        started = true;
    }
    else {
        nextSequence();
    }  
});
function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" +randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $('#level-title').text('Level '+ level);
}

checkAnswer(currentLevel) {

}



