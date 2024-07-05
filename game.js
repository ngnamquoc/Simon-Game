let userClickedPattern=[];
const gamePattern=[];
const buttonColors=["red", "blue", "green", "yellow"];

//play audio accordingly
function playSound(name){
    let sound=new Audio("./sounds/"+name+".mp3");
    sound.play();
}

//default level
let level=-1;

//randomly generate number
function nextSequence(){
    //increament level & update h1
    level+=1;
    $("h1").text("Level "+level);


    randomNumber=Math.floor((Math.random()*4));
    let randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
 
    $("#"+randomChosenColor).fadeIn(150).fadeOut(150).fadeIn(150);
    playSound(randomChosenColor);
}


function animatePress(currentColor){
    // console.log(currentColor);
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");

    },100)

}


//detect when a keyboard is pressed
$(document).on("keydown",function(){
    level==-1?nextSequence():null;
})

function wrongClassToggle(){
    $("body").addClass("game-over");
    setInterval(function(){
        $("body").removeClass("game-over");
    },200);

    //reset level
    level=-1;

    $("h1").html("Game Over, <br> Press Any Key to Restart <i class='fa fa-refresh fa-spin' style='font-size:3rem'></i>");
}

function checkAnswer(currentLevel){
    //check the most recent index
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        // console.log("correct");
        //check the whole sequence
        for (let i = 0; i < gamePattern.length; i++) {
            if(userClickedPattern[i]!= gamePattern[i]){
                console.log("game over");
                playSound("wrong");
                wrongClassToggle();

            }            
        }
        //empty userArray
        // console.log("empty userClickedPattern array");
        userClickedPattern=[];

        //proceed to the next sequence after 1000ms
        setInterval(nextSequence(),4000);
        
        
    }else{
        // console.log("wrong");
        console.log("game over");
        playSound("wrong");
        wrongClassToggle();

    }

}

//detect button got clicked and event handler

    $("div.btn").click(function(){
        if(level>-1){
            let userChosenColor=this.id;
            //animate click button
            animatePress(userChosenColor);
            //play sound according to button got clicked
            playSound(userChosenColor);
            //push to userPattern array
            userClickedPattern.push(userChosenColor);
        
            //check the answer by passing current level
            let currentLevel= gamePattern.length-1;
            // console.log(currentLevel);
            // console.log(userClickedPattern.length-1);
            if(currentLevel==(userClickedPattern.length-1)){
                // console.log("array length matches");
                checkAnswer(currentLevel);
            }
            // currentLevel== (userClickedPattern.length-1)?checkAnswer(currentLevel):null;

        }
     
    
    })










