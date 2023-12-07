import "../css/ManageCategory.css"
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
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
                        <input type={"search"} placeholder={"Search Category"}/>
                    </div>

                    <div className={"user-wrapper2"}>
                        <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                        <div>
                            <h4>Nirajan Mahato</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className={"btn1"}>
                        <button type={"button"}><span><IoIosAddCircle /></span>Add Category</button>
                    </div>

                    <div className={"table-container2"}>
                        <div className={"card-header2"}>
                            <h2>Categories</h2>
                        </div>
                        <div className={"card-body2"}>
                            <table className={"table-bordered2"}>
                                <thead>
                                    <tr>
                                        <th className={"id-box"}>Id</th>
                                        <th className={"name-box"}>Name</th>
                                        <th className={"status-box"}>Status</th>
                                        <th className={"edit-box"}>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Pizza</td>
                                        <td>Visible</td>
                                        <td>Edit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ManageCategory