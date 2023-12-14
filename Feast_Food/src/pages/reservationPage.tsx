import logo from "../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png";
import {Link} from "react-router-dom";
import "../css/reservationPage.css";
import Dropdown from "./dropDown.tsx";



const ReservationPage = () =>{

    return(
        <>
            {/*<div className={"reservation"} >*/}
            <div className={"reserv-nav-bar"}>
                <div className={"feast-logo"}>
                    <img src={logo} width={"55rem"} />
                </div>
                <div className={"reserv-options"}>
                    <ul>
                        <Link to={"/"}><li><a>Home</a></li></Link>
                        <Link to={"/Ourmenu"}><li><a>Our Menu</a></li></Link>
                        <li><a className={"active"}>Reservation</a></li>
                    </ul>
                </div>
                <div className={"hp-sign-btn"}>
                    <Link to={"/LoginPage"}>
                        <h3>Sign in</h3>
                    </Link>
                </div>
            </div>
            <div className={"reserv-container"}>
                <div className={"reservation"}>
                    <h2>Reservations</h2>
                    <h1>Book a table</h1>
                </div>
                <div className={"info-reservation"}>
                    <input type={"text"} className={"name_input"} placeholder={"Name"}/>
                    <input type={"text"} className={"phno_input"} placeholder={"Phone Number"}/>
                    <input type={"text"} className={"no_of_people_input"} placeholder={"Number of Persons"}/>
                    <Dropdown/>
                </div>
            </div>

        {/*</div>*/}
            </>
    )

}



export default ReservationPage