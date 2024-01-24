import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import gsap from "gsap";
import AdminSidebar from "./adminSidebar.tsx";

import "../css/ManageTable.css";

const ManageTable = () => {
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
                    <h1>Manage Table</h1>
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
                        <div className={"btn1"}>
                            <button type={"button"} onClick={toggleCatgModal}>
                <span>
                  <IoIosAddCircle
                      style={{ fontSize: "1.5rem", marginBottom: "-4px" }}
                  />
                </span>
                                Add Table
                            </button>
                        </div>

                        <div className={"table-container2"}>
                            <div className={"card-header2"}>
                                <h2>Tables</h2>
                            </div>
                            <div className={"card-body2"}>
                                <table className={"table-bordered2"}>
                                    <thead>
                                    <tr>
                                        <th className={"id-box2"}>ID</th>
                                        <th className={"name-box2"}>Table Name</th>
                                        <th className={"Status-box2"}>Status</th>
                                        <th className={"edit-box2"}>Edit</th>
                                        <th className={"delete-box2"}>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* Uncomment and modify the following block based on your needs */}
                                    {/* {filteredData?.map((i) => (
                      <tr key={i?.id}>
                        <td>{i?.id}</td>
                        <td>{i?.name}</td>
                        <td>
                          <button
                            className={"edit-btn2"}
                            onClick={() => {
                              // navigate("/edit/" + i?.id);
                              console.log(i?.id);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className={"delete-btn2"}
                            onClick={() => {
                              // Display confirmation prompt before deletion
                              // if (
                              //   window.confirm(
                              //     "Are you sure you want to delete this category?"
                              //   )
                              // ) {
                              //   deleteByIdApi.mutate(i?.id);
                              // }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTable;
