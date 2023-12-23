import "../css/ManageItem.css"
import React, { useEffect, useState } from "react";
import ItemData from "../components/ItemData.tsx";
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


    // Add Items modal
    const [modal, setModal] = useState(false);
    const toggleItemModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    // GSAP cdn for animation
    useEffect(() => {
        if (modal) {
            gsap.from(".add-item-modal", {
                y: -50,
                duration: 0.3,
                opacity: 0,
            });
        }
    }, [modal]);

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <div>
            <div className={"add-item-page"}>
                <div className={"itempage-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"itempage-right"}>
                    <header className={"itempage-header"}>
                        <h1>Manage Item</h1>

                        <div className={"search-wrapper"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Item"}/>
                        </div>

                        <div className={"user-wrapper"}>
                            <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                            <div>
                                <h4>Nirajan Mahato</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </header>

                    <div className={"item-main-content"}>
                        <div className={"i-main-content"}>
                            <div className={"btn3"}>
                                <button type={"button"} onClick={toggleItemModal}><span><IoIosAddCircle /></span>Add Items</button>
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
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="add-item-modal">
                    <div onClick={toggleItemModal} className="add-item-overlay"></div>
                    <div className="add-item-modal-content">
                        <h2>#Add Item</h2>
                        <button className="close-add-item-btn" onClick={toggleItemModal}>
                            <FaRegWindowClose />
                        </button>
                        <div className={"select-category"}>
                            <label>Category</label>
                            <select id={"category-option"} placeholder={""}>
                                <option>Select a Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Salad</option>
                            </select>
                        </div>
                        <div className={"item-name"}>
                            <label>Item Name</label>
                            <input type={"text"} placeholder={"Enter item Name"}/>
                        </div>
                        <div className={"item-id-number"}>
                            <label>ID</label>
                            <input type={"number"} placeholder={"Enter ID"}/>
                        </div>
                        <div className={"item-price"}>
                            <label>Price</label>
                            <input type={"number"} placeholder={"Enter the Price"}/>
                        </div>
                        <div className={"item-image"}>
                            <label>Image</label>
                            <span><input type={"image"} placeholder={"Add image here"}/></span>
                        </div>

                        <div className={"item-name-add-btn"}>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCategory