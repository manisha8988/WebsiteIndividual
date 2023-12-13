import "../css/homePage.css"
import logo from "../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png"
import {FaSearch} from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import {Link} from "react-router-dom";


const HomePage = () => {


    return(
        <>
            <div className={"home-page"}>
                <div className={"hp-first-div"}>
                    <div className={"nav-bar"}>
                        <div className={"feast-logo"}>
                            <img src={logo} width={"55rem"} />
                        </div>
                        <div className={"home-options"}>
                            <ul>
                                <li><a className={"active"}>Home</a></li>
                                <Link to={"/Ourmenu"}><li><a>Our Menu</a></li></Link>
                                <li><a>Contact</a></li>
                                {/*<li><a>History</a></li>*/}
                            </ul>
                        </div>
                        <div className={"hp-sign-btn"}>
                            <Link to={"/LoginPage"}>
                                <span><MdOutlinePeople /></span>
                                <h3>Sign in</h3>
                            </Link>
                        </div>
                    </div>
                    <div className={"hp-main-container"}>
                        <div className={"feast-slogan"}>
                            <h1>Savor the flavor Straight to your door.</h1>
                        </div>
                        <div className={"hp-search-wrapper"}>

                            <input type={"search"} placeholder={"Search Your Food Here..."}/>

                            <span><FaSearch/></span>
                        </div>
                    </div>
                </div>

                <div className={"hp-second-div"}>
                    second div
                </div>
            </div>
        </>
    )
}

export default HomePage