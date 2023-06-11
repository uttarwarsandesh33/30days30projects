    const cells = document.querySelectorAll('.cell');
    const resetButton = document.querySelector('.resetbutton');
    const playerTurnDisplay = document.getElementById('playerturn');
    let currentPlayer = '😁';
    let gameActive = true;

    function handleCellClick(e) {
      const cell = e.target;
      const currentSymbol = currentPlayer;

      if (cell.textContent !== '' || !gameActive) return;

      cell.textContent = currentSymbol;

      if (checkWin(currentSymbol)) {
        endGame(false);
        return;
      }

      if (checkDraw()) {
        endGame(true);
        return;
      }

      currentPlayer = currentPlayer === '😁' ? '😉' : '😁';
      playerTurnDisplay.textContent = currentPlayer;
    }

    function checkWin(symbol) {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];

      return winningCombinations.some(combination => {
        return combination.every(index => cells[index].textContent === symbol);
      });
    }

    function checkDraw() {
      return [...cells].every(cell => cell.textContent !== '');
    }

    function endGame(draw) {
      gameActive = false;
      if (draw) {
        alert("It's a draw!");
        resetGame();
      } else {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      }
    }

    function resetGame() {
      cells.forEach(cell => (cell.textContent = ''));
      currentPlayer = '😁';
      gameActive = true;
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);