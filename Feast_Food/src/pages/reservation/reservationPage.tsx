// import "../../css/reservationPage.css";
// import Dropdown from "./dropDown.tsx";
// import "../../css/reservationPage.css";
// import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx"
// import {useLocation} from "react-router-dom";
//
//
// const ReservationPage = () =>{
//
//     const location = useLocation(); // Use useLocation to get the current location
//     const currentLocation = location.pathname;
//
//     return(
//         <>
//             <div className={"reservation-page"} >
//                 <HomeNavbar activePage={currentLocation}/>
//                 <div className={"reserv-text"}>
//                     <h2>Reservations</h2>
//                     <h1>Book a table</h1>
//                 </div>
//                 <div className={"info-reservation"}>
//                     <input type={"text"} className={"name_input"} placeholder={"Name"}/>
//                     <input type={"text"} className={"phno_input"} placeholder={"Phone Number"}/>
//                     <input type={"text"} className={"no_of_people_input"} placeholder={"Number of Persons"}/>
//                     <label className={"dropdown"}>Date<input type={"date"} placeholder={"Arrival Date"}/></label>
//                     <Dropdown/>
//                     <input type={"date"} className={"dropdown"} placeholder={"Arrival Date"}/>
//                     <Hour/>
//                     <button>Book A Table</button>
//                 </div>
//             </div>
//         </>
//     )
//
// }
//
//
// export default ReservationPage