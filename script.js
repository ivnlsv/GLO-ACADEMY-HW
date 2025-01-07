"use strict";
function guessNumberBot() {
  let randomNum = Math.floor(Math.random() * 100) + 1;

  function guessNumber(attempts) {
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
      guessNumber(attempts);
    } else if (userGuess > randomNum) {
      attempts--;
      alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);

      if (attempts > 0) {
        guessNumber(attempts);
      } else {
        alert("Попытки закончились, хотите сыграть еще?");
        if (confirm("Начать новую игру?")) {
          guessNumberBot();
        }
      }
    } else if (userGuess < randomNum) {
      attempts--;
      alert(`Загаданное число больше. Осталось попыток: ${attempts}`);

      if (attempts > 0) {
        guessNumber(attempts);
      } else {
        alert("Попытки закончились, хотите сыграть еще?");
        if (confirm("Начать новую игру?")) {
          guessNumberBot();
        }
      }
    } else {
      alert("Поздравляю, Вы угадали!!!");
      if (confirm("Хотели бы сыграть еще?")) {
        guessNumberBot();
      }
    }
  }

  guessNumber(10);
}

guessNumberBot();
