import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import "../../css/eventsPage.css"


const EventsPage = () =>{

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <>
            <div className={"events-page-div"}>
                <HomeNavbar activePage={currentLocation} />
                <div className={"events-text-div"}>
                    <h1>events<b>.</b></h1>
                </div>
                <div className={"events-main-container"}>
                    <div className={"anniversary-div"}>
                        <div className={"anniversary-img"}>
                            <img src={"https://i.pinimg.com/564x/3e/45/6d/3e456db18497f04e41d7bb5a7c40d67f.jpg"} alt={"Anniversary"}/>
                            <div className={"img-overlay"}></div>
                            <Link to={"/AnniversaryPage"}><div className={"book-btn"}>
                                <h2>BOOK</h2>
                            </div></Link>
                        </div>
                        <div className={"anniversary-info"}>
                            <h1>Wedding Anniversary</h1>
                            <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisi sem, quis luctus arcu malesuada ac. Suspendisse a tempor lorem. Donec eu arcu at sapien laoreet auctor. Mauris tincidunt ornare efficitur. Nulla erat risus, pulvinar aliquet sapien eget, posuere</p>
                            <Link to={"/AnniversaryPage"}><button>Book</button></Link>
                        </div>
                    </div>
                    <div className={"birthday-div"}>
                        <div className={"birthday-info"}>
                            <h1>Birthday</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisi sem, quis luctus arcu malesuada ac. Suspendisse a tempor lorem. Donec eu arcu at sapien laoreet auctor. Mauris tincidunt ornare efficitur. Nulla erat risus, pulvinar aliquet sapien eget, posuere
                            </p>
                            <Link to={"/BirthdayPage"}><button>Book</button></Link>
                        </div>
                        <div className={"birthday-img"}>
                            <img src={"https://i.pinimg.com/564x/6a/bc/fc/6abcfcc48c9c35224ccf6e8b1ac90cc6.jpg"} alt={"Birthday image"}/>
                            <div className={"img-overlay"}></div>
                            <Link to={"/BirthdayPage"}><div className={"book-btn"}>
                                <h2>BOOK</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className={"line2"}></div>
                <div className={"copyright-text"}>
                    <h5>Copyright © 2023/2024 Feast</h5>
                </div>
            </div>
        </>
    )
}

export default EventsPage;