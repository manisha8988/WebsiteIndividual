import React from "react";
import {FaSearch} from "react-icons/fa";

interface NavbarProps {
    filterItem: (category: string) => void;
    menuList: string[];
}

const Navbar: React.FC<NavbarProps> = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="menu-navbar">
                {/*<div className={"search-wrapper"}>*/}
                {/*    <input type={"search"} placeholder={"Search your food here..."} />*/}
                {/*    <span><FaSearch/></span>*/}
                {/*</div>*/}
                <h2>Categories</h2>
                <div className="menu-btn-group">
                    {menuList.map((curElem) => (
                        <button
                            key={curElem}
                            className="menu-btn-group__item"
                            onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
