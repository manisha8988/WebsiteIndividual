import "../css/booking.css"
import React, {  } from "react";
// import ItemData from "../components/ItemData.tsx";
// import { IoIosAddCircle } from "react-icons/io";
// import gsap from "gsap";
import AdminSidebar from "./adminSidebar.tsx";
import {useLocation} from "react-router-dom";
// import {IoIosAddCircle} from "react-icons/io";
// import ItemData from "../components/ItemData.tsx";
// import {FaSearch} from "react-icons/fa";



// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// const API = "https://jsonplaceholder.typicode.com/users";

const Booking: React.FC = () => {
    // const [users, setUsers] = useState<User[]>([]);
    //
    // const fetchUsers = async (url: string) => {
    //     try {
    //         const res = await fetch(url);
    //         const data: User[] = await res.json();
    //         if (data.length > 0) {
    //             setUsers(data);
    //         }
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    //
    // useEffect(() => {
    //     fetchUsers(API);
    // }, []);
    //
    //
    // // Add Items modal
    // const [modal, setModal] = useState(false);
    // const toggleItemModal = () => {
    //     setModal(!modal);
    // };
    //
    // if (modal) {
    //     document.body.classList.add('active-modal');
    // } else {
    //     document.body.classList.remove('active-modal');
    // }
    //
    // // GSAP cdn for animation
    // useEffect(() => {
    //     if (modal) {
    //         gsap.from(".add-item-modal", {
    //             y: -50,
    //             duration: 0.3,
    //             opacity: 0,
    //         });
    //     }
    // }, [modal]);
    //
    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <div>
            <div className={"add-item-page"}>
                <div className={"itempage-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"bookingpage-right"}>
                    <header className={"bookingpage-header"}>
                        <h1>Booking</h1>

                        {/*<div className={"search-wrapper"}>*/}
                        {/*    <span><FaSearch /></span>*/}
                        {/*    <input type={"search"} placeholder={"Search Item"}/>*/}
                        {/*</div>*/}

                        <div className={"user-wrapper"}>
                            <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                            <div>
                                <h4>Admin</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </header>
                    <div className={"booking-main-content"}>
                        <div className={"table-container3"}>
                            <div className={"card-header10"}>
                                <h2>Booking Details</h2>
                            </div>
                            <div className={"card-body3"}>
                                <table className={"bookingtable-bordered3"}>
                                    <thead>
                                    <tr>
                                        <th className={"sn-box10"}>S.N.</th>
                                        <th className={"name-box10"}>Name</th>
                                        <th className={"number-box10"}>Phone Number</th>
                                        <th className={"person-box10"}>Nu. of person</th>
                                        <th className={"date-box10"}>Date</th>
                                        <th className={"hour-box10"}>hour</th>
                                        <th className={"purpose-box10"}>purpose of reservation(optional)</th>
                                        {/*<th className={"status-box3"}>Status</th>*/}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td> Shah</td>
                                        <td>98*********</td>
                                        <td>100</td>
                                        <td>2023/12/29</td>
                                        <td>5</td>
                                        <td>night out</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td> Mahajan</td>
                                        <td>98*********</td>
                                        <td>2</td>
                                        <td>2023/12/29</td>
                                        <td>5</td>
                                        <td>new year eve celebration</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Mahato</td>
                                        <td>98*********</td>
                                        <td>2</td>
                                        <td>2023/12/29</td>
                                        <td>5</td>
                                        <td>birthday</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    {/*<div className={"item-main-content"}>*/}
                    {/*    <div className={"i-main-content"}>*/}
                    {/*        <div className={"btn3"}>*/}
                    {/*            <button type={"button"}*/}
                    {/*                    // onClick={toggleItemModal}*/}
                    {/*            ><span><IoIosAddCircle /></span>Add Items</button>*/}
                    {/*        </div>*/}

                    {/*        <div className={"table-container3"}>*/}
                    {/*            <div className={"card-header3"}>*/}
                    {/*                <h2>Items</h2>*/}
                    {/*            </div>*/}
                    {/*            <div className={"card-body3"}>*/}
                    {/*                <table className={"table-bordered3"}>*/}
                    {/*                    <thead>*/}
                    {/*                    <tr>*/}
                    {/*                        <th className={"id-box3"}>Id</th>*/}
                    {/*                        <th className={"name-box3"}>Name</th>*/}
                    {/*                        <th className={"category-box"}>Category</th>*/}
                    {/*                        <th className={"image-box3"}>Image</th>*/}
                    {/*                        <th className={"price-box3"}>Price</th>*/}
                    {/*                        <th className={"action-box3"}>Action</th>*/}
                    {/*                        <th className={"status-box3"}>Status</th>*/}
                    {/*                    </tr>*/}
                    {/*                    </thead>*/}
                    {/*                    <tbody>*/}
                    {/*                    <ItemData users={users} />*/}
                    {/*                    </tbody>*/}
                    {/*                </table>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>



        </div>
    );
};

export default Booking;