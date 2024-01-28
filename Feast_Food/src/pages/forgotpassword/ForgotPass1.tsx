import '../../css/ForgotPass1.css'
import { IonIcon } from '@ionic/react';
import { mailOutline } from 'ionicons/icons';
import {Link} from "react-router-dom";
import {FaQuestionCircle, FaRegWindowClose} from 'react-icons/fa';
function ForgotPass1(){

    return(
        <div className={"wrapper1"}>
            <div className={"heading"}>
                <div>FORGOT PASSWORD</div>
                <div>PLEASE ENTER YOUR USERNAME TO VERIFY?</div>
            </div>
            <div className={"close-button"}>
                <button className="close-btn"><FaRegWindowClose/></button>
            </div>
            <div className={"input-section"}>
                <input className={"username_input"} type={"text"} placeholder={"Username"}/>
                <span className={"mail-icon"}><IonIcon icon={mailOutline} /></span>
            </div>
            <div className={"input-section"}>
                <input className={"question_input"} type={"text"} placeholder={"SECURITY QUESTION HERE"}/>
                <span className={"mail-icon"}><FaQuestionCircle /></span>
            </div>
            <div className={"send-button"}>
                <Link to={"/f3"}><button className={"sendbtn"}>SEND</button></Link>
            </div>
        </div>
    )
}
export default ForgotPass1;