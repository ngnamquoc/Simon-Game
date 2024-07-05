const gamePattern=[];
const buttonColors=["red", "blue", "green", "yellow"];


function nextSequence(){
    randomNumber=Math.floor((Math.random()*4));
    // console.log(randomNumber);
    return randomNumber;
}


let randomChosenColor=buttonColors[nextSequence()];
// console.log(randomChosenColor);

gamePattern.push(randomChosenColor);
console.log(gamePattern);

//Create flash effect based on chosen color
setInterval(()=>{
    $("#"+randomChosenColor).fadeIn();
    $("#"+randomChosenColor).fadeOut();


},100)
//play audio accordingly
let sound=new Audio("./sounds/"+randomChosenColor+".mp3");
console.log(sound);
sound.play();

