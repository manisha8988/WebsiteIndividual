import "../../css/reservationPage.css";
import Dropdown from "./dropDown.tsx";
// import Hour from "./hour.tsx";
import "../../css/reservationPage.css";
import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx"
import {useLocation} from "react-router-dom";


const ReservationPage = () =>{

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <>
            <div className={"reservation-page"} >
                <HomeNavbar activePage={currentLocation}/>
                <div className={"reserv-text"}>
                    <h2>Reservations</h2>
                    <h1>Book a table</h1>
                </div>
                <div className={"info-reservation"}>
                    <input type={"text"} className={"name_input"} placeholder={"Name"}/>
                    <input type={"text"} className={"phno_input"} placeholder={"Phone Number"}/>
                    <input type={"text"} className={"no_of_people_input"} placeholder={"Number of Persons"}/>
                    <Dropdown/>
                    {/*<Hour/>*/}
                    <button>Book A Table</button>
                </div>
            </div>
        </>
    )

}



export default ReservationPage