class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 8;

  }
  
  pickWord() {
    let i = Math.floor(Math.random() * this.words.length); //create random index
    this.secretWord = this.words[i];
    return this.words[i] //return word at i position from array
  }
  
  checkIfLetter(keyCode) { 
    if (keyCode >= 'a' && keyCode <= 'z') {
      return true;
    } else {
      return false;
    }
  }
  
  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }
  
  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.letters.push(letter);
  }
  
  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
  }
  
  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  checkWinner() {
    if (this.guessedLetters.length == this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord)
    
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  console.log(event.key)
  if (!hangman.checkIfLetter(event.key)) {
    alert('Please type an alphabetic letter!')
    return;
  };
  if (!hangman.checkClickedLetters(event.key)) {
    alert(`You've already tried this letter!`);
    return;
  };
  if (hangman.secretWord.includes(event.key)) {
    hangman.addCorrectLetter(event.key);
  } else {
    hangman.addWrongLetter(event.key);
  };
  if (hangman.checkWinner()) {
    alert('YOU WIN!!!')
  } else if (hangman.checkGameOver()) {
    alert('LOOOOOOSER!')
  };
  console.log(hangman)
});
