import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

export const Guess = ({ guess, answer }) => {
    const checks = checkGuess(guess, answer);
    console.log({ checks });

    return (
        <p className="guess">
            {range(5).map(i => (
                <span className={`cell ${checks ? checks[i].status : ''}`} key={i}>
                    {checks && checks[i].letter}
                </span>
            ))}
        </p>
    );
}