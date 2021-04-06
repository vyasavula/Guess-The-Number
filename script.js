'use strict';

let secretNumber = Math.floor(Math.random()*20 + 1)
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number is guessed';
  }
  else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent="Correct Number"
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if(score > highScore) {
        highScore = score;
        document.querySelector('.highScore').textContent=highScore;
      }



  }else if(guess > secretNumber){
    if (score> 1){
      document.querySelector('.message').textContent="Number too high"
      score--;//score = score -1 
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent="You Lose the game"
    }
  

  }else if (guess < secretNumber) {
    if (score> 1){
      document.querySelector('.message').textContent="Number too Low"
      score--;//score = score -1 
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent="You Lose the game"
    }
  
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score= 20;
  secretNumber = Math.floor(Math.random()*20 + 1);
  document.querySelector('.number').textContent ='?';
  document.querySelector('.guess').value='';
  document.querySelector('.message').textContent="Start Guessing";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;

})



