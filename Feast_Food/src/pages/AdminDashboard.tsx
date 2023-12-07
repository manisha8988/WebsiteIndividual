import "../css/AdminDashboard.css"
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
// import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa6";

function AdminDashboard(){
    return(
        <div>
            <div className={"sidebar"}>
                <div className={"sidebar-brand"}>
                    <h1> <span><TiHome /></span>Feast</h1>
                </div>

                <div className={"sidebar-menu"}>
                    <ul>
                        <li><a href={""} className={"active"}><span> <AiFillAccountBook /></span>Dashboard</a></li>
                        <Link to={"/ManageCategory"}><li><a href={""}><span><BiSolidCategoryAlt /></span> Manage Categories</a></li></Link>
                        <Link to={"/ManageItem"}><li><a href={""}><span><FaBowlFood /></span>Manage Items</a></li></Link>
                    </ul>
                </div>
            </div>

            <div className={"main-content"}>
                <header>
                    <h1>Dashboard</h1>

                    <div className={"search-wrapper"}>
                        <span><FaSearch /></span>
                        <input type={"search"} placeholder={"Search here"}/>
                    </div>

                    <div className={"user-wrapper"}>
                        <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                        <div>
                            <h4>Nirajan Mahato</h4>
                            <small>Super admin</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className={"cards"}>
                        <div className={"card-single01"}>
                            <div>
                                <h1>54</h1>
                            </div >
                            <div  className={"card-nameicon"}>
                                <span><FaUsers /></span>
                                <span>Customers</span>
                            </div>
                        </div>

                        <div className={"card-single02"}>
                            <div>
                                <h1>79</h1>
                                <span>Projects</span>
                            </div>
                            <div><FaClipboard /></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard

