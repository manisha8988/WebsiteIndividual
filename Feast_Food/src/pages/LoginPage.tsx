import "../css/LoginPage.css"
// import 'ionicons/dist/ionicons/css/ionicons.min.css';
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";




function LoginPage(){
    return (
        <div>
                 <div className={"wrapper"}>
                     <span className={"Icon-close"}><FaWindowClose /></span>
                     <div className={"form-box-login"}>
                         <h1>Login</h1>
                         <form>
                             <div className={"input-box"}>
                                 <span className={"iconemail"}> <IoMdMail /></span>
                                 <div className={"Email"}>
                                 <input type={"email"} placeholder={"Email"}   />
                                 </div>

                             </div>
                             <div className={"input-box"}>
                                 <span className={"iconpassword"}><RiLockPasswordFill /></span>
                                 <div className={"Password"}>
                                 <input type={"password"} placeholder={"Password"}/>
                                 </div>
                             </div>
                              <div className={"Remember-forget"}>
                                  <label><input type={"Checkbox"}/>Remember me</label>
                                  <a href={"#"}> Forget Password</a>
                              </div>
                             {/*<div className={"btn-login1"}>*/}
                                <button className={"btn-login1"}>Login</button>
                             {/*</div>*/}
                             <div className={"Login-register"}>
                                 <p>Don't have an account?
                                 <a href={"#"} className={"register-link"}>Register</a>
                                 </p>

                             </div>
                         </form>
                     </div>
                 </div>
        </div>

    )
}

export default LoginPage