import "../css/UserProfileView.css"
import { IoPersonCircleOutline } from "react-icons/io5";
import {FaRegWindowClose} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {X } from "lucide-react";


function UserProfileView(){

    const navigate = useNavigate();

    const [user, setUser] = useState({})
    useEffect(() => {
        const data: any = JSON.parse(localStorage.getItem("userDetails"));
        setUser(data);
    }, [localStorage.getItem("userDetails")]);

    const   handleLogout = () => {
        // Check if a user is currently logged in
        const isLoggedIn = Boolean(localStorage.getItem('userDetails'));

        if (isLoggedIn) {
            // Clear user details from localStorage
            localStorage.removeItem('userDetails');

            // Update the state to reflect logout
            setUser(null);

            navigate('/');
        }
    };
    const handleGoBack = () => {
        // Use the goBack function to navigate to the previous page
        navigate(-1);
    };

    return(
        <div className={"user_profile_main"}>
            <div className={"cross-icon"}>
                <button onClick={handleGoBack}>

                        <X size={16} strokeWidth={1} />

                </button>
            </div>
                <form className={"user_profile_form"}>
                    <div className={"name"}>
                        <p className={"name-box"}>
                            {user.fullName}
                        </p>
                    </div>

                    <div className={"order-history"}>
                        <button className={"logout-btn"} onClick={handleLogout}>Sign out</button>
                    </div>
                </form>
            </div>
    )
}
export default UserProfileView;