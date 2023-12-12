import "../css/homePage.css"
import logo from "../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png"
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";


const HomePage = () => {


    return(
        <>
            <div className={"home-page"}>
                <div className={"nav-bar"}>
                    <div className={"feast-logo"}>
                        <img src={logo} width={"55rem"} />
                    </div>
                    <div className={"home-options"}>
                        <ul>
                            <li><a className={"active"}>Home</a></li>
                            <li><a>Our Menu</a></li>
                            <li><a>Contact</a></li>
                            {/*<li><a>History</a></li>*/}
                        </ul>
                    </div>
                    <div className={"hp-login-btn"}>
                        <Link to={"/LoginPage"}><button>Sign in</button></Link>
                    </div>
                </div>
                <div className={"hp-main-container"}>
                    <div className={"feast-slogan"}>
                        <h3>Savor the flavor Straight to your door.</h3>
                    </div>
                    <div className={"hp-search-wrapper"}>
                        <input type={"search"} placeholder={"Search Your Food Here"}/>
                        <span><FaSearch/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage