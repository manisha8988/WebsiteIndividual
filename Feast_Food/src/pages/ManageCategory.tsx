import "../css/ManageCategory.css"
import React, { useEffect, useState } from "react";
import CategoryData from "../components/CategoryData.tsx";
import { IoIosAddCircle } from "react-icons/io";
import {FaRegWindowClose, FaSearch} from "react-icons/fa";
import gsap from "gsap";
import AdminSidebar from "./adminSidebar.tsx";
import {useLocation} from "react-router-dom";


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

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;


    return(
        <section>
            <div className={"manage-category-page"}>
                <div className={"category-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"category-right"}>
                    <header className={"category-header"}>
                        <h1>Manage Category</h1>

                        <div className={"search-wrapper"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Category"}/>
                        </div>

                        <div className={"user-wrapper"}>
                            <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                            <div>
                                <h4>Nirajan Mahato</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </header>

                    <div className={"category-main-content"}>
                        <div className={"c-main-content"}>
                            <div className={"btn1"}>
                                <button type={"button"} onClick={toggleCatgModal}><span><IoIosAddCircle style={{fontSize:"1.5rem",marginBottom:"-4px"}}/></span>Add Category</button>
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
                        </div>

                    </div>
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