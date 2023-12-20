import "../../css/recommendationPage.css"

const RecommendationPage = () =>{
    return(
        <>
            <div className="reco-container">
                <div className="reco-slide">

                    <div className="reco-item" style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}>
                        <div className="content">
                            <div className="name">Food</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    {/* Repeat the above structure for other items */}
                </div>

                <div className="button">
                    <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default RecommendationPage