let score = JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0
}
document.querySelector('.scores').innerHTML=`wins: ${score.wins}, losses: ${score.losses}`;
function coinFlip(guess){
  let you ='';
  if (guess === 'head'){
    you = document.querySelector('.head').src;
  }
  else{
    you = document.querySelector('.tail').src;
  }
  const randomNumber = Math.random();
  let computerMove = '';
  let computer = '';
  if (randomNumber <1/2){
    computerMove = 'head';
    computer = document.querySelector('.head').src;
  } 
  else {
    computerMove = 'tail';
    computer = document.querySelector('.tail').src;
  }
  let result = '';
  if (guess === computerMove){
    result = 'You win';
    score.wins += 1;
  }
  else {
    result = 'You lose';
    score.losses += 1;
  }
document.querySelector('.result').innerHTML=`${result}`;
document.querySelector('.moves').innerHTML=`You <img src=${you}>-<img src=${computer}>computer`;
document.querySelector('.scores').innerHTML=`wins: ${score.wins}, losses: ${score.losses}`;
localStorage.setItem('score',JSON.stringify(score));
}