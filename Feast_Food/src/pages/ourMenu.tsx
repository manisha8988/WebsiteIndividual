import React, { useState } from "react";
import "../css/ourMenu.css";
import Menu from "./menuPage/menuApi.tsx";
import MenuCard from "./menuPage/menuCard.tsx";
import Navbar from "./menuPage/menuNavbar.tsx";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import {useLocation} from "react-router-dom";

const uniqueList: string[] = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

// console.log(uniqueList);

interface RestaurantProps {}

const OurMenu: React.FC<RestaurantProps> = () => {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

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
                <HomeNavbar activePage={currentLocation} />
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

export default OurMenu;
