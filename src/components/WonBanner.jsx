import { Banner } from "./Banner"


export const WonBanner = ({ numberOfGuesses }) => {

    return (
        <Banner status={'happy'}>
            <p>
                <strong>Congratulations!</strong> Got it in
                {' '}
                <strong>
                    {`${numberOfGuesses === 1 ? '1 guess' : `${numberOfGuesses} guesses`}`}
                </strong>.
            </p>
        </Banner>
    )
}