import logo from "../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png";
import {Link} from "react-router-dom";
import "../css/reservationPage.css"


const ReservationPage = () =>{
    return(
        <>
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
                    <h3>Sign in</h3>
                </div>
            </div>
        </>
    )
}

export default ReservationPage