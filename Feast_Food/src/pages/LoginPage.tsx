import "../css/LoginPage.css"
// import 'ionicons/dist/ionicons/css/ionicons.min.css';


function LoginPage(){
    return (
        <div>


     <div className={"wrapper"}>
         <div className={"form-box-login"}>
             <h2>Login</h2>
             <form action={"#"}>
                 <div className={"input-box"}>
                     <span className={"icon"}></span>
                     <input type={"email"} />
                     <label> email </label>
                 </div>
                 <div className={"input-box"}>
                     <span className={"icon"}></span>
                     <input type={"Password"}/>
                     <label> Password</label>
                 </div>
                  <div className={"Remember-forget"}>
                      <label><input type={"Checkbox"}/>
                          Remember me</label>
                      <a href={"#"}> Forget Password</a>
                  </div>
                 <button type={"submit"} className={"btnlogin"}>Login</button>
                 <div className={"Login-register"}>
                     <p>Don't have an account?
                     <a href={"#"} className={"register-link"}>Register</a>
                     </p>

                 </div>
             </form>


         </div>
     </div>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>

    )
}

export default LoginPage