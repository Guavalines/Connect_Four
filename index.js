document.addEventListener('DOMContentLoaded', () =>
{
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      //if the square below your current square is taken, you can go on top of it
      if (squares[i + 7].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[i].classList.add('taken')
          squares[i].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        }
      } else alert('cant go here')
    }
  }

})
