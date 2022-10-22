import React from 'react';

export const Form = ({ setGuesses }) => {
    const [term, setTerm] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.length !== 5) {
            return;
        }

        setGuesses(prevState => [...prevState, term]);
        setTerm('');
    }


    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                maxLength={5}
                minLength={5}
                type="text"
                value={term}
                onChange={e => setTerm(e.target.value.toLocaleUpperCase())}
            />
        </form>
    )
}