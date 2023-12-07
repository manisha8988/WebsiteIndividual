import "../css/ManageItem.css"
import React, { useEffect, useState } from "react";
import ItemData from "../components/ItemData.tsx";
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
// import React from "react";


interface User {
    id: number;
    name: string;
    email: string;
}

const API = "https://jsonplaceholder.typicode.com/users";

const ManageCategory: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async (url: string) => {
        try {
            const res = await fetch(url);
            const data: User[] = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchUsers(API);
    }, []);

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
                        <li><a href={""}  className={"active"}><span><FaBowlFood /></span> Manage Items</a></li>
                    </ul>
                </div>

                <div className={"sidebar-btn3"}>
                    <button type={"button"}><span><IoMdLogOut /></span>Log Out</button>
                </div>
            </div>

            <div className={"main-content3"}>
                <header>
                    <h1>Manage Items</h1>

                    <div className={"search-wrapper3"}>
                        <span><FaSearch /></span>
                        <input type={"search"} placeholder={"Search Item"}/>
                    </div>

                    <div className={"user-wrapper3"}>
                        <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                        <div>
                            <h4 className={"admin-name"}>Nirajan Mahato</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>

                <main className={"main3"}>
                    <div className={"btn3"}>
                        <button type={"button"}><span><IoIosAddCircle /></span>Add Items</button>
                    </div>

                    <div className={"table-container3"}>
                        <div className={"card-header3"}>
                            <h2>Items</h2>
                        </div>
                        <div className={"card-body3"}>
                            <table className={"table-bordered3"}>
                                <thead>
                                <tr>
                                    <th className={"id-box3"}>Id</th>
                                    <th className={"name-box3"}>Name</th>
                                    <th className={"category-box"}>Category</th>
                                    <th className={"image-box3"}>Image</th>
                                    <th className={"price-box3"}>Price</th>
                                    <th className={"action-box3"}>Action</th>
                                    <th className={"status-box3"}>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <ItemData users={users} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ManageCategory