var buttonColors = ['red' , 'blue' , 'green' , 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
// var lis = [];

$('.btn').click(function(){
    var userChosenColor = $(this).attr('id');
    // console.log(userChosenColor);
    // console.log($(this).attr('id'));
    
    userClickedPattern.push(userChosenColor);
    // var userClickedPattern = [];
    // lis.push(userClickedPattern);
    // console.log(userClickedPattern);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    // setTimeout(function(){nextSequence()},1000);
    // userClickedPattern.length = 0;
})

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    // console.log(gamePattern);
    // playSound(randomChosenColor);
    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    $('h1').text('Level '+level);
    level = level + 1;
    
}


// nextSequence();


function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();

}

function animatePress(currentColor){
    $("."+currentColor).addClass('pressed');
    setTimeout(function(){
        $('.'+currentColor).removeClass('pressed');
    } , 100);
}

$(document).keydown(function(){
    if(!started){
        nextSequence();
        started = true ;
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        // console.log('success');

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){nextSequence()},1000)
        }
    }else{
        playSound('wrong')

        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over')
        } , 200);

        $('h1').text('Game Over.Press Any key to start again');

        startOver();
    }
    // }else{
    //     console.log('wrong');
    // }
    // console.log(userClickedPattern);
    // console.log(gamePattern);
    
    
    
}

function startOver(){
    level = 0 ;
    getPattern = [] ;
    started = false;
}



// $(document).keydown(function(event){
//     console.log(event.key);
// });
// console.log($('btn').click());



