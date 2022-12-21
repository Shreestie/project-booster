// random value generated
  var y=Math.floor(Math.random()*10+1)
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user    

function playAgain(){
    y=Math.floor(Math.random() *10+1)
}
guess=1
function submit(){
   x= document.getElementById("guessField").value
   if(x==y){
    alert("CONGRATULATIONS!!!!!!!!!!!!"+playername+"YOU GUESSED IT IN ONE"+guess+"GUESS");
    guess=1;
}
else if(x>y){
    guess++;
    alert("OOPS SORRY!! TRY USING A SMALLER NUMBER");
}
else{
   guess++
    alert("OOPS SORRY!! TRY USING A GREATER NUMBER")
}
}