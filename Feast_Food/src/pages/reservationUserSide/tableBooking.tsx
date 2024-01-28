// import "../../css/tableBooking.css";
// import {Link} from "react-router-dom";
// import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx"
// import {useLocation} from "react-router-dom";
//
//
// function Reservation(){
//
//     const location = useLocation(); // Use useLocation to get the current location
//     const currentLocation = location.pathname;
//
//     return(
//         <>
//             <HomeNavbar activePage={currentLocation}/>
//             <div className={"reserve-table"}>
//                 <div className={"wrapper10"}>
//                     <div className={"reserv-text"}>
//                         <h2>Reservations</h2>
//                         <h1>Book a table</h1>
//                     </div>
//                     <div>
//                     </div>
//                     <div className={"row1"}>
//                         <div className={"table1"}>
//                             <img className={"table1photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:1</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option className={"available"}>Available</option>
//                                     <option className={"booked"}>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                         <div className={"table2"}>
//                             <img className={"table2photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:2</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                         <div className={"table3"}>
//                             <img className={"table3photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:3</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                     </div>
//                     <div className={"row2"}>
//                         <div className={"table4"}>
//                             <img className={"table4photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:4</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                         <div className={"table5"}>
//                             <img className={"table5photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:5</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                         <div className={"table6"}>
//                             <img className={"table6photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:6</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                     </div>
//                     <div className={"row3"}>
//                         <div className={"table7"}>
//                             <img className={"table7photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:7</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                         <div className={"table8"}>
//                             <img className={"table8photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:8</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                         <div className={"table9"}>
//                             <img className={"table9photo"} width={100} src={"src/images/Table1.jpeg"}/>
//                             <h5>Table No:9</h5>
//                             <div className={"status"}>
//                                 <h6>Status:</h6>
//                                 <select className={"scroll"}>
//                                     <option>Available</option>
//                                     <option>Booked</option>
//                                 </select>
//                             </div>
//                             <Link to={"/ReservationPage"}><button className={"book-button"}>Book</button></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default Reservation;