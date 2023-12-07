import "../css/ManageCategory.css"
import React, { useEffect, useState } from "react";
import CategoryData from "../components/CategoryData.tsx";
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";


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

    function toggle() {
        const blur = document.getElementById('blur');
        if (blur) {
            blur.classList.toggle('active');
        }

        const popup = document.getElementById('popup');
        if (popup) {
            popup.classList.toggle('active');
        }
    }

    return(
        <div>
            <div className={"manage-category-page"} id={"blur"}>
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

                    <div className={"sidebar-btn2"}>
                        <button type={"button"}><span><IoMdLogOut /></span>Log Out</button>
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
                                <h4 className={"admin-name"}>Nirajan Mahato</h4>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </header>

                    <main className={"main2"}>
                        <div className={"btn1"}>
                            <button type={"button"} onClick={toggle}><span><IoIosAddCircle /></span>Add Category</button>
                        </div>

                        <div className={"table-container2"}>
                            <div className={"card-header2"}>
                                <h2>Categories</h2>
                            </div>
                            <div className={"card-body2"}>
                                <table className={"table-bordered2"}>
                                    <thead>
                                    <tr>
                                        <th className={"id-box2"}>Id</th>
                                        <th className={"name-box2"}>Name</th>
                                        <th className={"action-box22"}>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <CategoryData users={users} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div id={"popup"}>
                <h2>Lorem Ipsum is simply dummy text</h2>
                <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href={"#"} onClick={toggle}>Close</a>
            </div>
        </div>

    );
};

export default ManageCategory