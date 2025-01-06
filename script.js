"use strict";
function guessNumberBot() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  const attempts = 10;
  function guessNumber() {
    const userInput = prompt(
      `Угадай число от 1 до 100. Осталось попыток: ${attempts}`
    );

    if (userInput === null) {
      alert("Игра окончена");
      return;
    }

    const userGuess = Number(userInput);

    if (isNaN(userGuess)) {
      alert("Введи число!");
      guessNumber();
    } else if (userGuess > randomNum) {
      attempts--;
      alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);
      if (attempts > 0) {
        guessNumber();
      } else {
        alert("Попытки закончились, хотите сыграть еще?");
        if (confirm("Начать новую игру?")) {
          //  randomNum = Math.floor(Math.random() * 100) + 1;
          //  attempts = 10;
          guessNumber();
        }
      }
    } else if (userGuess < randomNum) {
      attempts--;
      alert(`Загаданное число больше. Осталось попыток: ${attemptsLeft}`);
      if (attempts > 0) {
        guessNumber();
      } else {
        alert("Попытки закончились, хотите сыграть еще?");
        if (confirm("Начать новую игру?")) {
          //randomNum = Math.floor(Math.random() * 100) + 1;
          //attempts = 10;
          guessNumber();
        }
      }
    } else {
      alert("Поздравляю, Вы угадали!!!");
      if (confirm("Хотели бы сыграть еще?")) {
        //randomNum = Math.floor(Math.random() * 100) + 1;
        //attempts = 10;
        guessNumber();
      }
    }
  }

  guessNumber();
}

guessNumberBot();
