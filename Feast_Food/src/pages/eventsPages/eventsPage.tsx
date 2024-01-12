import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import "../../css/eventsPage.css"
import {FaRegWindowClose} from "react-icons/fa";
import {toast, ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import gsap from "gsap";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useForm} from "react-hook-form";


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

    //Toast
    const notify = () =>toast.success('Event Reservation Successful.', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });


    //hitting server on port 8081
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm();

    const{errors} = formState;

    const useApiCall = useMutation({
        mutationKey:["POST_EVENT_DATA"],
        mutationFn:(payload:any)=>{
            console.log(payload)
            return axios.post("http://localhost:8088/event/save",payload)
        },onSuccess: () => {
            notify();
            reset();
        }
    })

    const onSubmit=(value:any)=>{
        useApiCall.mutate(value)
    }

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
                <div className={`event-modal ${modalType}-modal`}>
                    <div onClick={() => toggleModal(null)} className={`event-modal-overlay ${modalType}-modal-overlay`}></div>
                    <div className={`event-modal-content ${modalType}-modal-content`}>
                        <h2>{modalType === 'anniversary' ? 'Wedding Anniversary' : 'Birthday'}</h2>
                        <button className={`close-modal-btn`} onClick={() => toggleModal(null)}>
                            <FaRegWindowClose />
                        </button>

                        <div className={"event-modal-name"}>
                            <label>Name:</label>
                            <input type={"text"}  className={"event-modal-input"}/>
                        </div>
                        <div className={"event-modal-email"}>
                            <label>Contact:</label>
                            <input type={"number"} className={"event-modal-input"}/>
                        </div>
                        <div className={"event-modal-date-guests"}>
                            <div className={"event-modal-date"}>
                                <label>Date:</label>
                                <input type={"date"} className={"event-modal-input-date"}/>
                            </div>
                            <div className={"event-modal-guests"}>
                                <label>Number of Guests: </label>
                                <input type={"number"} className={"event-modal-input-guests"}/>
                            </div>
                        </div>

                        <div className={"event-modal-book-btn"}>
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