import '../../css/ForgotPass3.css'
import {FaArrowLeft, FaRegWindowClose} from "react-icons/fa";
import {Link} from "react-router-dom";
import {RiLockPasswordFill} from "react-icons/ri";


function ForgotPass3(){

    return(
        <div className={"wrapper1"}>
            <div className={"heading"}>
                <div>CREATE NEW PASSWORD</div>
                <div>PLEASE ENTER YOUR NEW PASSWORD!</div>
            </div>
            <div className={"close-button"}>
                <button className="close-btn2"><FaRegWindowClose/></button>
                <Link to={"/forgot_pass2"}><button className={"previous"}><FaArrowLeft/>Back</button></Link>
            </div>
            <div className={"input-section"}>
                <input className={"password_input"} type={"password"} placeholder={"NEW PASSWORD"}/>
                <span className={"iconpassword"}><RiLockPasswordFill /></span>
                <input className={"confirm_input"} type={"password"} placeholder={"CONFIRM PASSWORD"}/>
                <span className={"iconpassword"}><RiLockPasswordFill /></span>

            </div>
            <div className={"send-button"}>
                <Link to={"/"}><button className={"sendbtn"}>SAVE</button></Link>
            </div>
        </div>
    )
}

export default ForgotPass3;