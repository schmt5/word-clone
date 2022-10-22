import React, { useEffect } from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { Form } from '../Form';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { Guess } from '../Guess';
import { WonBanner } from '../WonBanner';
import { LostBanner } from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('playing');

  useEffect(() => {
    if (guesses.includes(answer)) {
      setStatus('won');
      return;
    }

    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }, [guesses]);

  return (
    <>
      <h1>Game</h1>
      {range(NUM_OF_GUESSES_ALLOWED).map(i => (
        <Guess
          key={i}
          guess={guesses[i]}
          answer={answer}
        />
      ))}

      {status === 'playing' && (
        <Form setGuesses={setGuesses} />
      )}
      {status === 'won' && (
        <WonBanner numberOfGuesses={guesses.length} />
      )}
      {status === 'lost' && (
        <LostBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
