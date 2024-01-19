import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import {Link, useLocation} from "react-router-dom";
import "../../css/eventsPage.css"
import {useEffect, useState} from "react";
import gsap from "gsap";
import {toast, ToastContainer} from "react-toastify";
import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import {FaRegWindowClose} from "react-icons/fa";


const EventsPage = () =>{

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

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
    const reservationSuccess = () =>toast.success('Event Reservation Successful.', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const useApiCall = useMutation({
        mutationKey:["POST_EVENT_DATA"],
        mutationFn:(payload:any)=>{
            return axios.post("http://localhost:8088/event/save",payload)
        },onSuccess: () => {
            reservationSuccess();
            reset();
        }
    })

    const onSubmit=(value:any)=>{
        useApiCall.mutate(value)
    }

    //hitting server on port 8081
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm();

    const{errors} = formState;

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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={"event-modal-name"}>
                                <label>Name:</label>
                                <input type={"text"} className={"event-modal-name-input"} {...register("user_id", {required: "Name is required!!"})}/>
                                <h6 style={{paddingLeft: "3px"}}>{errors?.user_id?.message}</h6>
                            </div>
                            <div className={"event-modal-contact"}>
                                <label>Contact:</label>
                                <input type={"text"} className={"event-modal-contact-input"} {...register("contact", {required: "Contact is required!!"})}/>
                                <h6 style={{paddingLeft: "3px"}}>{errors?.contact?.message}</h6>
                            </div>
                            <div className={"event-modal-date-time-guests"}>
                                <div className={"event-modal-date"}>
                                    <label>Date:</label>
                                    <input type={"date"}
                                           className={"event-modal-date-input"}{...register("eventDate", {required: "Date is required!!"})}/>
                                    <h6 style={{paddingLeft: "3px"}}>{errors?.eventDate?.message}</h6>
                                </div>
                                <div className={"event-modal-time"}>
                                    <label>Arrival Time: </label>
                                    <input type={"time"}
                                           className={"event-modal-time-input"}{...register("eventTime", {required: "Please provide the arrival time!!"})}/>
                                    <h6 style={{paddingLeft: "3px"}}>{errors?.eventTime?.message}</h6>
                                </div>
                                <div className={"event-modal-guests"}>
                                    <label>No. of Guests: </label>
                                    <input type={"number"}
                                           className={"event-modal-guests-input"}{...register("noOfGuest", {required: "Number of guest is required!!"})}/>
                                    <h6 style={{paddingLeft: "3px"}}>{errors?.noOfGuest?.message}</h6>
                                </div>
                            </div>
                            <div className={"event-modal-request"}>
                                <label>Special Request </label>
                                <input type={"text"} className={"event-modal-request-input"}{...register("specialRequest")}/>
                            </div>
                            <div className={"event-modal-book-btn"}>
                                <button type={"submit"}>Book</button>
                            </div>
                        </form>

                    </div>
                        <ToastContainer/>
                    </div>
                    )}
                </>
    )
}

export default EventsPage