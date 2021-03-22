class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.secretWorldInLines = [];
    
    Array.from(this.secretWord).map(() => this.secretWorldInLines.push('_')); //create array with lines for the user
    console.log(this.secretWorldInLines)
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    //draw 
    this.context.beginPath();
    this.context.moveTo(200, 700);
    this.context.lineTo(400, 700);
    this.context.stroke();
    this.context.moveTo(300, 700);
    this.context.lineTo(300, 400);
    this.context.stroke();
    this.context.closePath();
    
    this.drawLines();
  }

  drawLines() {
    let i = 0;
    //for each line
    this.secretWorldInLines.forEach(line => {
      this.context.fillText(line, 550+i, 600); //add the line on the canvas
      this.context.stroke();
      i += 20;
    })
  }

  writeCorrectLetter(letter) {
    let j = 0;

    //check if letter is included in the secret word
    if (this.secretWord.includes(letter)) {
      j = 10 * this.secretWorldInLines.indexOf(letter)
      this.context.clearText(line, 600+j, 600); //delete line at the position where the word should appear
      this.context.fillText(letter, 600+j, 600); //add the letter
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    if (!this.secretWord.includes(letter)) {
      this.context.fillText(letter, 600+i, 350+i); //add letter at top right of the canvas
      i += 10;
      this.drawHangman(errorsLeft)
      hangman.errorsLeft--; //substitute errors left by one
    }
  }
  
  drawHangman(errorsLeft) {
    this.context.beginPath();
    switch(errorsLeft) {
      case 8:
        //draw bar
        this.context.moveTo(300, 400);
        this.context.lineTo(500, 400);
        break;
      case 7:
        //draw loop
        this.context.moveTo(500, 400);
        this.context.lineTo(500, 500);
        break;
      case 6:
        //draw head
        break;
      case 5:
        //draw torso
        break;
      case 4:
        //draw left arm
        break;
      case 3:
        //draw right arm
        break;
      case 2:
        //draw left leg
        break;
      case 1:
        //draw right leg
        break;
      case 0:
        //draw
        this.gameOver();
        break;
    }
    this.context.closePath();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
