"use strict";

function guessNumberBot(attempts, randomNum) {
  const attempts = 10;
  let randomNum = Math.floor(Math.random() * 100) + 1;
  function guessNumber() {
    const userInput = prompt("Угадай число от 1 до 100");
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
      alert(`Загаданное число меньше, осталось попыток: ${attempts}`);
      guessNumber();
    } else if (userGuess < randomNum) {
      attempts--;
      alert(`Загаданное число больше, осталось попыток: ${attempts}`);
      guessNumber();
    } else {
      alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (confirm("Нажмите OK для новой игры.")) {
        return guessNumber();
      } else {
        alert("Игра окончена.");
        return;
      }
    }
    if (attempts <= 0) {
      alert("Попытки закончились, хотите сыграть еще?");
      if (confirm("Нажмите OK для новой игры.")) {
        return guessNumber();
      } else {
        alert("Игра окончена.");
        return;
      }
    }
  }

  return guessNumber(attempts, randomNum);
}

guessNumberBot();
