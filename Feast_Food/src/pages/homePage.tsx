import "../css/homePage.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
// import RecommendationPage from "./imgSliderBar/recommendationPage.tsx";
import ImageSlider from "./imgSliderBar/imageSlider1.tsx";

const HomePage = () => {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <>
            <div className={"home-page"}>
                <div className={"hp-first-div"}>
                    <HomeNavbar activePage={currentLocation} />
                    <div className={"hp-main-container"}>
                        <div className={"feast-slogan"}>
                            <h1>Savor the flavor Straight to your door.</h1>
                        </div>
                        <div className={"hp-search-wrapper"}>
                            <input type={"search"} placeholder={"Search your food here..."}/>
                            <span><FaSearch/></span>
                        </div>
                    </div>
                </div>

                <div className={"hp-second-div"}>

                    <div className={"recommended-text"}>
                        {/*<h3>Recommended for you</h3>*/}
                    </div>
                    <ImageSlider/>
                    <div className={"view-more-btn"}>
                        <Link to={"/OurMenu"}><button>View More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage