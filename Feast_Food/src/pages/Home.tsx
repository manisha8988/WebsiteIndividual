import "../css/Home.css"
import {useEffect} from "react";


function Home() {
    useEffect(() => {
        document.title = "Website Title";
    }, []);

    return (
        <div>
            <div className={"header"}>
                <div className={"logo"}>
                    <img width={100}
                         src={"https://www.shutterstock.com/image-vector/sweet-cake-logo-cupcake-icon-600nw-1575517294.jpg"}/>

                </div>
                <div className={"search"}>
                    <input type={"text"} placeholder={"search for item..."}/>
                </div>
                <div className={"btn-wrapper"}>
                    <div className={"btn-login"}>
                        <button>Login</button>
                    </div>

                    <div className={"btn-register"}>
                        <button>Register</button>
                    </div>
                </div>
            </div>

            <div className={"main"}>
                <div className={"main-left"}>
                    <div className={"main-left-top"}>
                        main left top
                    </div>
                    <div className={"main-left-bottom"}>
                        main-left bottom
                    </div>
                </div>

                <div className={"main-right"}>
                    <div className={"item-information"}>
                        item information
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;