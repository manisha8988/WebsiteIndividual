import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import "../../css/eventsPage.css"
import {FaRegWindowClose} from "react-icons/fa";
import {ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import gsap from "gsap";


const EventsPage = () =>{

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;


    // Add category modal
    // const [anniversaryModal, setanniversaryModal] = useState(false);
    // const toggleAnniversaryModal = () => {
    //     setanniversaryModal(!anniversaryModal);
    // };
    //
    // if (anniversaryModal) {
    //     document.body.classList.add('active-modal');
    // } else {
    //     document.body.classList.remove('active-modal');
    // }
    //
    // // GSAP cdn for animation
    // useEffect(() => {
    //     if (anniversaryModal) {
    //         gsap.from(".anniversary-modal", {
    //             y: -50,
    //             duration: 0.4,
    //             opacity: 0,
    //         });
    //     }
    // }, [anniversaryModal]);


    const [modalType, setModalType] = useState<string | null>(null);

    const toggleModal = (type: string | null) => {
        setModalType(type);
    };

    const handleBookClick = (type: string) => {
        toggleModal(type);
    };

    useEffect(() => {
        if (modalType) {
            gsap.from(`.${modalType}-modal`, {
                y: -50,
                duration: 0.4,
                opacity: 0,
            });
        }
    }, [modalType]);

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
                            <button onClick={() => handleBookClick('anniversary')}>Book</button>
                        </div>
                    </div>
                    <div className={"birthday-div"}>
                        <div className={"birthday-info"}>
                            <h1>Birthday</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisi sem, quis luctus arcu malesuada ac. Suspendisse a tempor lorem. Donec eu arcu at sapien laoreet auctor. Mauris tincidunt ornare efficitur. Nulla erat risus, pulvinar aliquet sapien eget, posuere
                            </p>
                            <button onClick={() => handleBookClick('birthday')}>Book</button>
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

            {modalType && (
                <div className={`${modalType}-modal`}>
                    <div onClick={() => toggleModal(null)} className={`${modalType}-modal-overlay`}></div>
                    <div className={`${modalType}-modal-content`}>
                        <h2>{modalType === 'anniversary' ? 'Wedding Anniversary' : 'Birthday'}</h2>
                        <button className={`close-${modalType}-modal-btn`} onClick={() => toggleModal(null)}>
                            <FaRegWindowClose />
                        </button>

                        <div className={"anniversary-name"}>
                            <label>Name:</label>
                            <input type={"text"} placeholder={"Enter your name"} className={"anniversary-input"}/>
                        </div>
                        <div className={"anniversary-email"}>
                            <label>Email:</label>
                            <input type={"text"} placeholder={"Enter your email"} className={"anniversary-input"}/>
                        </div>
                        <div className={"anniversary-date-guests"}>
                            <div className={"anniversary-date"}>
                                <label>Date:</label>
                                <input type={"date"} placeholder={"Enter the date"} className={"anniversary-input"}/>
                            </div>
                            <div className={"anniversary-guests"}>
                                <label>Number of Guests: </label>
                                <input type={"number"} placeholder={"Enter the number of guests"} className={"anniversary-input"}/>
                            </div>
                        </div>

                        <div className={"anniversary-book-btn"}>
                            <button type={"submit"}>Book</button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </>
    )
}

export default EventsPage;