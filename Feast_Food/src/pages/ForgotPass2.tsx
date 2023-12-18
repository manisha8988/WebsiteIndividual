import '../css/ForgotPass2.css'
import {Link} from "react-router-dom";
import {FaArrowLeft, FaQuestionCircle, FaRegWindowClose} from 'react-icons/fa';
function ForgotPass2(){

    return(
        <div className={"wrapper1"}>
            <div className={"heading"}>
                <h1>VERIFY YOUR EMAIL</h1>
                <p>PLEASE ENTER THE SECURITY QUESTION YOU ENTERED IN SIGNUP!</p>
            </div>
            <div className={"close-button"}>
                <button className="close-btn1"><FaRegWindowClose/></button>
                <Link to={"/forgot_pass1"}><button className={"previous1"}><FaArrowLeft/>Back</button></Link>
            </div>
            <div className={"input-section"}>
                <input className={"question_input"} type={"text"} placeholder={"SECURITY QUESTION HERE"}/>
                <span className={"mail-icon"}><FaQuestionCircle /></span>
            </div>
            <div className={"send-button"}>
                <Link to={"/forgot_pass3"}><button className={"sendbtn"}>VERIFY</button></Link>
            </div>
        </div>
    )
}

export default ForgotPass2;