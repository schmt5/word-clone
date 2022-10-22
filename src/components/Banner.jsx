

export const Banner = ({ status, children }) => {

    return (
        <div className={`${status} banner`}>
            {children}
        </div>
    )
}