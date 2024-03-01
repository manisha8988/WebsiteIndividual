import "../css/homePage.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import HomePageSearch from "./homePageSearch.tsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Carousel from "./carousel.tsx";
import OurMenu from "./ourMenu.tsx";

const HomePage = () => {

    const [search,setSearch] = useState(null);

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    // Fetching data from API
    const { data: menuData } = useQuery({
        queryKey: ["GET_ITEMMENU_DATA"],
        queryFn() {
            return axios.get("http://localhost:8080/item/findAll");
        }
    });

    // Searching data


    return(
        <>
            <div className={"home-page"}>
                <div className={"hp-first-div"}>
                    <HomeNavbar activePage={currentLocation} />

                    <div className={"hp-main-container"}>

                    </div>
                </div>

                <Carousel />

                <div className={"hp-second-div"}>
                    {search && <div className={"line2"}></div> &&  <div className={"home-search-div"}>
                        <HomePageSearch filteredItemData={filteredItemData}/>
                    </div>}
                    <div className={"recommendation-div"}>
                        <div className={"view-more-btn"}>
                            <Link to={"/OurMenu"}><button>View More</button></Link>
                        </div>
                    </div>

                </div>
                <OurMenu/>
            </div>
        </>
    )
}

export default HomePage