import logo from "../../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaCartArrowDown, FaRegWindowClose, FaUser} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {RiLockPasswordFill} from "react-icons/ri";
import gsap from "gsap";
import "../../css/LoginPage.css"
import "../../css/RegistrationPage.css"
import "../../css/HomeNavbar.css"

interface HomeNavbarProps {
    activePage: string;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ activePage }) => {

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
            <div className={"nav-bar"}>
                <div className={"feast-logo"}>
                    <img src={logo} width={"40px"} />
                </div>
                <div className={"home-options"}>
                    <ul>
                        <Link to={"/"}><li className={activePage === "/" ? "active" : ""}><a>Home</a></li></Link>
                        <Link to={"/OurMenu"}><li className={activePage === "/OurMenu" ? "active" : ""}><a>Our Menu</a></li></Link>
                        <Link to={"/Reservation"}><li className={activePage === "/Reservation" ? "active" : ""}><a>Reservation</a></li></Link>
                        <Link to={"/EventsPage"}><li className={activePage === "/EventsPage" ? "active" : ""}><a>Events</a></li></Link>
                        <Link to={"/ContactPage"}><li className={activePage === "/ContactPage" ? "active" : ""}><a>Contact</a></li></Link>
                    </ul>
                </div>

                <div className={"hp-navright"}>
                    <span  className={"icon-cart"}><FaCartArrowDown /></span>
                    <div className={"hp-sign-btn"}>
                        <h3 onClick={toggleLoginModal}>Sign in</h3>
                    </div>
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
                            <span className={"iconmail"}> <FaUser /></span>
                            <div className={"username"}>
                                <input type={"email"} placeholder={"Username"}   />
                            </div>
                            <span className={"iconpassword"}><RiLockPasswordFill /></span>
                            <div className={"password"}>
                                <input type={"password"} placeholder={"Password"}/></div>
                        </div>
                        <div className={"Remember-forget"}>
                            <label><input type={"checkbox"}/>Remember me</label>
                            <a href={"#"} >Forget passsword</a>
                        </div>
                        <button type={"submit"} className={"btn-login10"} >Login</button>
                        <div className={"register-text"}>
                            <p> Don't have an account?
                                <a href={"#"} onClick={toggleRegisterModal}>Register</a></p>
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

                        <div className={"reg-input-box"}>
                            <span className={"iconname"}> <FaUser /></span>
                            <div className={"username"}>
                                <input type={"name"} placeholder={"Name"}/>
                            </div>
                            <span className={"iconmail"}><IoMdMail /> </span>
                            <div className={"useremail"}>
                                <input type={"email"} placeholder={"Email"}/>
                            </div>
                            <span className={"iconpassword"}><RiLockPasswordFill /></span>
                            <div className={"password"}>
                                <input type={"password"} placeholder={"Password"}/>
                            </div>
                            <span className={"iconpassword"}><RiLockPasswordFill /></span>
                            <div className={"password"}>
                                <input type={"password"} placeholder={"Confirm Password"}/>
                            </div>
                        </div>
                        <div className={"security-question"}>
                            <div className={"header10"}>Security Question</div>
                            <div className={"answer"}>
                                <input type={"answer"} placeholder={"Your first school name?"}/>
                            </div>

                        </div>

                        <button type={"submit"} className={"btn-signup10"} onClick={toggleLoginModal} >Sign Up</button>

                    </div>
                </div>
            )}

        </>
    )
}

export default HomeNavbar;