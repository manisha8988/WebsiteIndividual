import "../css/ManageItem.css"
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
// import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function ManageItem(){
    return(
        <div>
            <div className={"sidebar3"}>
                <div className={"sidebar-brand3"}>
                    <h1> <span><TiHome /></span>Feast</h1>
                </div>

                <div className={"sidebar-menu3"}>
                    <ul>
                        <Link to={"/"}><li><a href={""}><span> <AiFillAccountBook /> </span>Dashboard</a></li></Link>
                        <Link to={"/ManageCategory"}><li><a href={""}><span><BiSolidCategoryAlt /></span> Manage Categories</a></li></Link>
                        <li><a href={""} className={"active"}><span><FaBowlFood /></span> Manage Items</a></li>
                    </ul>
                </div>
            </div>

            <div className={"main-content3"}>
                <header>
                    <h1>Manage Items</h1>

                    <div className={"search-wrapper3"}>
                        <span><FaSearch /></span>
                        <input type={"search"} placeholder={"Search here"}/>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default ManageItem