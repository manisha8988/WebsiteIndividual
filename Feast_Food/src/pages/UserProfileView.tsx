import "../css/UserProfileView.css"
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


function UserProfileView(){
    return(
        <div className={"user_profile_main"}>
            <div className={"cross-icon"}>
                <button>
                    <span>
                        <RxCross2 />
                    </span>

                </button>
            </div>
            <div className={"my_profile"}>
                <h1>My Profile</h1>

            <form className={"user_profile_form"}>
                <div className={"user_icon"}>
                    <span >
                        <IoPersonCircleOutline size={100} />
                    </span>

                </div>
                <div className={"name"}>
                    <p className={"name-box"}>
                        Name :
                    </p>
                    <p className={"email-box"}>
                        Email :
                    </p>
                </div>
                <div className={"order_history"}>
                    <button >
                        Order History
                    </button>
                </div>
                <div className={"login_button"}>
                    <button >
                        Login
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default UserProfileView;