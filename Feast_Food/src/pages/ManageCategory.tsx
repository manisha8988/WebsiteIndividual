import "../css/ManageCategory.css"
import React, { useEffect, useState } from "react";
import CategoryData from "../components/CategoryData.tsx";
import {Link} from "react-router-dom";

import { AiFillAccountBook} from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidCategoryAlt} from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import {FaRegWindowClose, FaSearch} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import gsap from "gsap";


interface User {
    id: number;
    name: string;
    email: string;
}

const API = "https://jsonplaceholder.typicode.com/users";

const ManageCategory: React.FC = () =>  {
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


    // Add category modal
    const [modal1, setModal] = useState(false);
    const toggleCatgModal = () => {
        setModal(!modal1);
    };

    if (modal1) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }


    // GSAP cdn for animation
    useEffect(() => {
        if (modal1) {
            gsap.from(".add-category-modal", {
                y: -50,
                duration: 0.3,
                opacity: 0,
            });
        }
    }, [modal1]);


    return(
        <section>
            <div className={"manage-category-page"}>
                <div className={"sidebar2"}>
                    <div className={"sidebar-brand2"}>
                        <h1> <span><TiHome /></span>Feast</h1>
                    </div>

                    <div className={"sidebar-menu2"}>
                        <ul>
                            <Link to={"/admindashboard"}><li><a><span> <AiFillAccountBook /> </span>Dashboard</a></li></Link>
                            <li><a className={"active"}><span><BiSolidCategoryAlt /></span> Manage Categories</a></li>
                            <Link to={"/ManageItem"}><li><a ><span><FaBowlFood /></span> Manage Items</a></li></Link>
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
                            <button type={"button"} onClick={toggleCatgModal}><span><IoIosAddCircle /></span>Add Category</button>
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
                                        <th className={"edit-box2"}>Edit</th>
                                        <th className={"delete-box2"}>Delete</th>
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

            {modal1 && (
                <div className="add-category-modal">
                    <div onClick={toggleCatgModal} className="add-category-overlay"></div>
                    <div className="add-category-modal-content">
                        <h2>#Addn Category</h2>
                        <button className="close-add-category-btn" onClick={toggleCatgModal}>
                            <FaRegWindowClose />
                        </button>
                        <div className={"category-id-number"}>
                            <label>ID</label>
                            <input type={"number"} placeholder={"Enter ID"}/>
                        </div>
                        <div className={"category-name"}>
                            <label>Category Name</label>
                            <input type={"text"} placeholder={"Enter Category Name"}/>
                        </div>
                        <div className={"category-name-add-btn"}>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ManageCategory