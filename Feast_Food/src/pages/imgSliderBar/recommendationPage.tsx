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
<<<<<<< Updated upstream

                <div className="button">
                    <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
=======
                <div className="carousel-item">
                    <div className="carousel-card">
                        <div className="img-area" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800)' }}></div>
                        <div className="carousel-container">
                            <h4>Food 2</h4>
                            <p><i>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</i></p>
                            <Link to={"/OurMenu"}><button className="carousel-btn">See more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card">
                        <div className="img-area" style={{ backgroundImage: 'url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800)' }}></div>
                        <div className="carousel-container">
                            <h4><b>Food 3</b></h4>
                            <p><i>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</i></p>
                            <Link to={"/OurMenu"}><button className="carousel-btn">See more</button></Link>
                        </div>
                    </div>
                </div><div className="carousel-item">
                    <div className="carousel-card">
                        <div className="img-area" style={{ backgroundImage: 'url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800)' }}></div>
                        <div className="carousel-container">
                            <h4><b>Food 4</b></h4>
                            <p><i>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</i></p>
                            <Link to={"/OurMenu"}><button className="carousel-btn">See more</button></Link>
                        </div>
                    </div>
                </div><div className="carousel-item">
                    <div className="carousel-card">
                        <div className="img-area" style={{ backgroundImage: 'url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800)' }}></div>
                        <div className="carousel-container">
                            <h4><b>Food 5</b></h4>
                            <p><i>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</i></p>
                            <Link to={"/OurMenu"}><button className="carousel-btn">See more</button></Link>
                        </div>
                    </div>
>>>>>>> Stashed changes
                </div>
            </div>
        </>
    )
}

export default RecommendationPage