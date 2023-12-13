import "../css/homePage.css"
import logo from "../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png"
import {FaRegWindowClose, FaSearch} from "react-icons/fa";
// import { MdOutlinePeople } from "react-icons/md";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {IoMdMail} from "react-icons/io";
import gsap from "gsap";
import "../css/LoginPage.css"
import "../css/RegistrationPage.css"

const HomePage = () => {

    // Login modal
    const [login_popup, setLModal] = useState(false);
    const toggleLoginModal = () => {
        setLModal(!login_popup);
        setRPopup(false); // Close the registration modal
    };

    // Registration modal
    const [register_popup, setRPopup] = useState(false);
    const toggleRegisterModal = () => {
        setRPopup(!register_popup);
        setLModal(false); // Close the login modal
    };

    if (login_popup || register_popup) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    useEffect(() => {
        const modalAnimation = (modalClass: string | null) => {
            if (modalClass) {
                gsap.from(`.${modalClass}`, {
                    duration: 0.3,
                    opacity: 0,
                    onComplete: () => {
                        // Callback when the animation is complete
                        if (login_popup) {
                            document.body.classList.add('active-login-modal');
                        } else if (register_popup) {
                            document.body.classList.add('active-register-modal');
                        }
                    },
                });
            }
        };

        modalAnimation(login_popup ? "login-modal" : (register_popup ? "register-modal" : null));

    }, [login_popup, register_popup]);



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
                                <Link to={"/reservationpage"}><li><a>Reservation</a></li></Link>
                            </ul>
                        </div>
                        <div className={"hp-sign-btn"}>
                            <h3 onClick={toggleLoginModal}>Sign in</h3>
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

            {login_popup && (
                <div className="login-modal">
                    <div onClick={toggleLoginModal} className="login-overlay"></div>
                    <div className="login-modal-content">
                        <h2>Login</h2>
                        <button className="close-login-btn" onClick={toggleLoginModal}>
                            <FaRegWindowClose />
                        </button>

                        <div className={"input-box"}>
                            <span className={"iconemail"}> <IoMdMail /></span>
                            <div className={"Email"}>
                                <input type={"email"} placeholder={"Email"}   />
                            </div>
                        </div>

                        <div className={"register-text"}>
                            <h4 onClick={toggleRegisterModal}>Register</h4>
                        </div>

                    </div>
                </div>
            )}

            {register_popup && (
                <div className="register-modal">
                    <div onClick={toggleRegisterModal} className="register-overlay"></div>
                    <div className="register-modal-content">
                        <h2>Register</h2>
                        <button className="close-register-btn" onClick={toggleRegisterModal}>
                            <FaRegWindowClose />
                        </button>

                        <div className={"input-box"}>
                            <span className={"iconemail"}> <IoMdMail /></span>
                            <div className={"Email"}>
                                <input type={"email"} placeholder={"Email"}   />
                            </div>
                        </div>

                        <div className={"login-text"}>
                            <h4 onClick={toggleLoginModal}>Login</h4>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default HomePage
