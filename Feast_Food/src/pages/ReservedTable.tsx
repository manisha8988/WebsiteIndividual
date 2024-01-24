import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import AdminSidebar from "./adminSidebar.tsx";
import "../css/ReservedTable.css";

const ReservedTable = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    const [modal1, setModal] = useState(false);

    const toggleCatgModal = () => {
        setModal(!modal1);
    };

    useEffect(() => {
        if (modal1) {
            document.body.classList.add("active-modal");
            gsap.from(".add-category-modal", {
                y: -50,
                duration: 0.3,
                opacity: 0,
            });
        } else {
            document.body.classList.remove("active-modal");
        }
    }, [modal1]);

    return (
        <div className={"manageTable-page"}>
            <div className={"manageTable-left"}>
                <AdminSidebar activePage={currentLocation} />
            </div>

            <div className={"manageTable-right"}>
                <header className={"manageTable-header"}>
                    <h1>Reserve List</h1>
                    <div className={"user-wrapper2"}>
                        <img
                            src={
                                "https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"
                            }
                            width={"40px"}
                            height={"40px"}
                            alt={"N"}
                        />
                        <div>
                            <h4>Admin</h4>
                            <small>Super admin</small>
                        </div>
                    </div>
                </header>
                <div className={"manageTable-main-content"}>
                    <div className={"ManageTableMain-content"}>
                        <div className={"table-container2"}>
                            <div className={"card-body2"}>
                                <table className={"table-bordered2"}>
                                    <thead>
                                    <tr>
                                        <th className={"id-box2"}>ID</th>
                                        <th className={"date-box2"}>Date</th>
                                        <th className={"name-box2"}>Name</th>
                                        <th className={"persons-box2"}>Persons</th>
                                        <th className={"phone-box2"}>Phone</th>
                                        <th className={"table-Id-box2"}>Table_Id</th>
                                        <th className={"delete-box2"}>Delete</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservedTable;
