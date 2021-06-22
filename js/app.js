const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');

const missed = 0;
const phrases = [
  'Hello world',
  'Javascript is fun',
  'Treehouse is the best',
  'Technology rules',
  'Planet Earth'
];



//return a random phrase from an array
const getRandomPhraseAsArray = arr => {
  let randNumb = arr[Math.floor(Math.random() * arr.length)];
  randNumb.split();
  return randNumb;
}
getRandomPhraseAsArray(phrases);
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//adds the letters of a string to the display
const addPhraseToDisplay = (arr) => {
  const ul = document.getElementById('phrase').firstElementChild;

  for(let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    const character = arr[i];
    li.textContent = character;

    // if character has a letter and no space
    if(character !== ' ') {
      li.className = 'letter'
    } else {
      li.className = 'space';
    }
    ul.appendChild(li);
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//check if a letter is in the phrase
const checkLetter = button => {
  let li = document.querySelectorAll('li.letter');
  let match = null;
  for (let i = 0; i < li.length; i++) {
    if (button.textContent === li[i].textContent.toLowerCase()) {
      li[i].classList.add('show');
      match = button.textContent;
    }
  }
  return match;
}
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//check if the game has been won or lost
const checkWin = () => {

}
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//listens for the start game button to be pressed
btnReset.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//listens for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
  //if e.target is not on qwerty
  if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
    //add chosen class to the button that was pressed
    //call checkLetter and store results in a variable
    const button = e.target;
    button.className = 'chosen';
    button.disabled;
    var letterFound = checkLetter(button);
    
    
    } else {
      //if checkLetter does not find a letter
            //remove one of the heart images
            //increment the 'missed' counter
      const heart = document.getElementsByClassName('tries');
      // heart.remove();
      // missed++;
    }
});




