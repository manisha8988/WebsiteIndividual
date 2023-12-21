import React, { useEffect, useRef } from 'react';
import '../../css/recommendationPage.css';
import {Link} from "react-router-dom";

const RecommendationPage: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initCarousel = () => {
            const carouselElement = carouselRef.current;
            if (carouselElement) {
                let currentIndex = 0;
                const items = carouselElement.querySelectorAll('.carousel-item');

                const showItem = (index: number) => {
                    items.forEach((item, i) => {
                        (item as HTMLElement).style.transform = `translateX(${100 * (i - index)}%)`;
                    });
                };

                const nextSlide = () => {
                    currentIndex = (currentIndex + 1) % items.length;
                    showItem(currentIndex);
                };
                setInterval(nextSlide, 4000);
            }
        };

        initCarousel();
    }, []);

    return (
        <div>
            <h2>Recommendation</h2>
            <div className="carousel" ref={carouselRef}>
                <div className="carousel-item">
                    <div className="carousel-card">
                        <div className="img-area" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800)' }}></div>
                        <div className="carousel-container">
                            <h4>Food 1</h4>
                            <p><i>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</i></p>
                            <Link to={"/OurMenu"}><button className="carousel-btn">See more</button></Link>
                        </div>
                    </div>
                </div>
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
                </div>
            </div>
        </div>
    );
};

export default RecommendationPage;
