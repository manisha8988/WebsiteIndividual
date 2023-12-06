import "../css/ManageCategory.css"
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
// import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// import React from "react";
function ManageCategory(){
    return(
        <div>
            <div className={"sidebar2"}>
                <div className={"sidebar-brand2"}>
                    <h1> <span><TiHome /></span>Feast</h1>
                </div>

                <div className={"sidebar-menu2"}>
                    <ul>
                        <Link to={"/"}><li><a href={""}><span> <AiFillAccountBook /> </span>Dashboard</a></li></Link>
                        <li><a href={""} className={"active"}><span><BiSolidCategoryAlt /></span> Manage Categories</a></li>
                        <Link to={"/ManageItem"}><li><a href={""} ><span><FaBowlFood /></span> Manage Items</a></li></Link>
                    </ul>
                </div>
            </div>

            <div className={"main-content2"}>
                <header>
                    <h1>Manage Categories</h1>

                    <div className={"search-wrapper2"}>
                        <span><FaSearch /></span>
                        <input type={"search"} placeholder={"Search here"}/>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default ManageCategory