import '../css/ForgotPassword.css'
function ForgotPassword(){

    return(
        <div className={"wrapper"}>
            <div className={"first-page"}>
                <h1>Forgot Password</h1>
                <img className={"firstphoto"}  src={"src/img/confusedlock.jpeg"}/>
                <p>Please Enter Your UserName To Verify</p>
                <input type={"text"} className={"username_input"} placeholder={"UserName"}/>
                <br/>
                <button className={"verify_button"}>Verify</button>
            </div>
        </div>

    )
}


export default ForgotPassword;