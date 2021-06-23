const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const ul = document.getElementById('phrase').firstElementChild;
const overlay = document.getElementById('overlay');
let missed = 0;

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
  let letter = document.querySelectorAll('.letter');
  let show = document.querySelectorAll('.show');
  let title = document.querySelector('.title');

  if (letter.length === show.length) {
    overlay.className = 'win';
    overlay.querySelector('.title').textContent = 'You Win!';
    overlay.style.display = 'flex';
  } else if (missed >= 5) {
    overlay.className = 'lose';
    overlay.querySelector('.title').textContent = 'Sorry, you lose';
    overlay.style.display = 'flex';
  }
  reset();
}
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//Reset function
const reset = () => {
  btnReset.textContent = 'Play again';
  btnReset.addEventListener('click', () => {
    location.reload(false);
  });
}

//listens for the start game button to be pressed
btnReset.addEventListener('click', () => {
  overlay.style.display = 'none';
});
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//listens for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
    const button = e.target;
    button.className = 'chosen';
    button.disabled;
    var letterFound = checkLetter(button);
    
      if(letterFound === null) {
      const tries = document.getElementsByClassName('tries');
      tries[missed].innerHTML = '<img src="images/lostHeart.png>';
      missed++;
    }
    checkWin();
  }
});




