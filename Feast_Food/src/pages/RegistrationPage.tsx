import "../css/RegistrationPage.css"
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from "react-router-dom";




function RegistrationPage() {
    return(
        <div>
            <div className={"wrapper0"}>
                <div className={"form-box-registreation"}>
                    <h1>Sign Up</h1>
                    <form>
                        <div className={"input-box"}>
                            <span className={"iconuser"}> <FaUser /></span>
                            <div className={"user"}>
                                <input type={"user"} placeholder={"User"}   />
                            </div>
                        </div>
                        <div className={"input-box"}>
                            <span className={"iconemail"}> <IoMdMail /></span>
                            <div className={"Email"}>
                                <input type={"Email"} placeholder={"Email"}   />
                            </div>
                        </div>
                        <div className={"input-box"}>
                            <span className={"iconpassword"}><RiLockPasswordFill /></span>
                            <div className={"Password"}>
                                <input type={"password"} placeholder={"Password"}/>
                            </div>
                        </div><div className={"input-box"}>
                            <span className={"iconpassword"}><RiLockPasswordFill /></span>
                            <div className={"Password"}>
                                <input type={"password"} placeholder={"Confirm Password"}/>
                            </div>
                        </div>
                        {/*<div className={"Remember-forget"}>*/}
                        {/*    <label><input type={"Checkbox"}/>Remember me</label>*/}
                        {/*    <a href={"#"}> Forget Password</a>*/}
                        {/*</div>*/}
                        {/*<div className={"btn-login1"}>*/}
                        <button className={"btn-signup"}>Sign Up</button>
                        {/*</div>*/}
                        <div className={"Login-register"}>
                            <p>Already have an account?
                                <Link to={"/LoginPage"}><a href={"#"} className={"account"}>Login in</a></Link>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default RegistrationPage