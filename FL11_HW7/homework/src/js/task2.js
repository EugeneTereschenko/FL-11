  let max = 8;
  let min = 0;
  let attempt = 3;
  let prize = 100;
  let currentPrize = 100;
  let totalPrize = 0;

  let userCode = 0;
  let gameCode = 0;

  let isRunGame = confirm('Do you want to play a game?');

  if (!isRunGame) {
    alert('You did not become a billionaire, but can.');
  } else {
    do {
      gameCode = Math.round(Math.random() * (max - min) + min);

      while (attempt > 0) {
        userCode = +prompt('Choose a roulette pocket number from ' + min +
          ' to ' + max +
          ' \n Attempts left: ' + attempt +
          '\n Total prize:' + totalPrize +
          '$ \n Possible prize on current attempt:' + currentPrize);

        if (gameCode === userCode) {
          totalPrize += currentPrize;
          if (confirm('Congratulation, you won! Your prize is: ' + totalPrize + ' $. Do you want to continue?')) {
            alert('Thank you for your participation. Your prize is ' + totalPrize + '$');
            isRunGame = confirm('Do you want to play again?');
            if (isRunGame) {
              prize *= 2;
              max += 4;
              attempt = 3;
              currentPrize = prize;
              break;
            }
          }
          break;

        } else if (attempt === 1) {
          alert('Thank you for your participation. Your prize is ' + totalPrize + '$');
          isRunGame = confirm('Do you want to play again?');
          if (isRunGame) {
            prize *= 2;
            max += 4;
            attempt = 3;
            currentPrize = prize;
            break;
          }
          break;
        }

        attempt = attempt - 1;
        currentPrize = currentPrize / 2;

      }
    } while (isRunGame);

  }