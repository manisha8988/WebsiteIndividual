import "../css/homePage.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import ImageSlider from "./imgSliderBar/imageSlider1.tsx";
import {useState} from "react";
import Menu from "./menuPage/menuApi.tsx";
import HomePageSearch from "./homePageSearch.tsx";

const HomePage = () => {

    const[menuData]=useState(Menu);

    const [search,setSearch] = useState('');

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
                            <input type={"search"} placeholder={"Search your food here..."} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <span><FaSearch/></span>
                        </div>
                    </div>
                </div>

                <div className={"hp-second-div"}>
                    <div className={"home-search-div"}>
                        <HomePageSearch menuData={menuData} search={search}/>
                    </div>

                    {search && <div className={"line2"}></div>}
                    <div className={"recommendation-div"}>
                        <ImageSlider/>
                        <div className={"view-more-btn"}>
                            <Link to={"/OurMenu"}><button>View More</button></Link>
                        </div>
                    </div>

                    <div className={"line2"}></div>
                    <div className={"copyright-text"}>
                        <h5>Copyright ©2024 Feast</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage