import React, { useState } from "react";
import "../css/ourMenu.css";
import Menu from "./menuPage/menuApi.tsx";
import MenuCard from "./menuPage/menuCard.tsx";
import Navbar from "./menuPage/menuNavbar.tsx";
import logo from "../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png"
// import { MdOutlinePeople } from "react-icons/md";
import {Link} from "react-router-dom";

const uniqueList: string[] = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);

interface RestaurantProps {}

const Resturant: React.FC<RestaurantProps> = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState<string[]>(uniqueList);


    const filterItem = (category: string) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
        <>
            <div className={"menu-page-div"}>
                <div className={"menu-nav-bar"}>
                    <div className={"feast-logo"}>
                        <img src={logo} width={"55rem"} />
                    </div>
                    <div className={"home-options"}>
                        <ul>
                            <Link to={"/"}><li><a>Home</a></li></Link>
                            <li><a className={"active"}>Our Menu</a></li>
                            <Link to={"/ReservationPage"}><li><a>Reservation</a></li></Link>
                        </ul>
                    </div>
                    <div className={"hp-sign-btn"}>
                        <Link to={"/LoginPage"}>
                            <h3>Sign in</h3>
                        </Link>
                    </div>
                </div>

                <div className={"check-out-container"}>
                    <h2>Check out our</h2>
                    <h1>MENU</h1>
                </div>

                <div className={"menu-contents"}>
                    <Navbar filterItem={filterItem} menuList={menuList} />
                    <MenuCard menuData={menuData} />
                </div>

            </div>
        </>
    );
};

export default Resturant;
