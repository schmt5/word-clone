import { Banner } from "./Banner"


export const LostBanner = ({ answer }) => {

    return (
        <Banner status={'sad'}>
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </Banner>
    )
}