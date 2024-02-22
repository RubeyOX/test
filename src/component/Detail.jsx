export default function (props) {
    const { movieName, background, description } = props.anime
    return (
        <div className='explore'>
            <h1>Explore</h1>
            <h2>What are you gonna watch today?</h2>
            <div className="detail-anime">
                <div className="mask">
                    <img src={background} alt="avt" />
                    <div className="info-anime">
                        <h1>{movieName}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
