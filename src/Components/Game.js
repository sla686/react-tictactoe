import Board from './Board';
import { calculateWinner } from '../helpers';
import { useState } from 'react';

const Game = () => {
  const styles = {
    fontSize: '2rem',
    width: '200px',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // Guard is user has won or is pressing on an occupied cell
    if (winner || boardCopy[i]) return;

    if (!boardCopy.includes(null)) {
      return;
    }

    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button
      className="newGame"
      onClick={() => {
        setBoard(Array(9).fill(null));
      }}
    >
      Start Game
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : !board.includes(null)
            ? ' Draw!'
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
      <footer>
        <p>
          Created by
          <a
            className="footer__link"
            target="_blank"
            href="mailto:sla686@gmail.com"
            rel="noreferrer"
          >
            {' '}
            Viacheslav Semushin
          </a>
          .
          <br />
          With the help of the React.js documentation.
        </p>
      </footer>
    </>
  );
};

export default Game;
