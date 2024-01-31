import axios from "axios";
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
// import Cart from "./cart/Cart.tsx";
import KhaltiCheckout from "khalti-checkout-web";
import HomeNavbar from "./Navbar&Modals/HomeNavbar";
import "../css/payment.css";
import {useMutation, useQuery} from "@tanstack/react-query";


const myKey = {
    publicTestKey: "test_public_key_402c2b0e98364222bb1c1ab02369cefd",
    secretKey: "test_secret_key_d46fe88dee964ecfbd0f699a9985f2d4",
};

// const backendBaseUrl = "http://localhost:8080";

const config = {
    publicKey: myKey.publicTestKey,
    productIdentity: "123766",
    productName: "Feast Food",
    productUrl: "http://localhost:4004",
    eventHandler: {
        onSuccess(payload) {
            console.log(payload);
            const data = {
                token: payload.token,
                amount: payload.amount,
            };

            axios
                .get(
                    `https://meslaforum.herokuapp.com/khalti/${data.token}/${data.amount}/${myKey.secretKey}`
                )
                .then((response) => {
                    console.log(response.data);
                    alert("Thank you for your generosity");
                })
                .catch((error) => {
                    console.log(error);
                    console.log('This error trigger');
                });
        },
        onError(error) {
            console.log(error);
        },
        onClose() {
            console.log("widget is closing");
        },
    },
    paymentPreference: [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
    ],
};

const Payment = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const checkout = new KhaltiCheckout(config);
    const buttonStyles = {
        backgroundColor: "#f3ad16",
        padding: "10px",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
        border: "1px solid white",
    };

    //delivery dropdown logic



    // payment dropdown logic
    const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

    // const handleConfirmOrder = () => {
    //     if (selectedPaymentOption === "Pay Via Khalti") {
    //         checkout.show({ amount: totalAmount*100});
    //     } else if (selectedPaymentOption === "Cash on delivery") {
    //         alert("Order placed successfully!");
    //         // Add any additional logic for cash on delivery
    //     } else {
    //         alert("Please select a valid payment option");
    //     }
    // };

    // // Fetching user details // //
    const [user, setUser] = useState({

    })
    useEffect(() => {
        const data: any = JSON.parse(localStorage.getItem("userDetails"));
        setUser(data);
    }, [localStorage.getItem("userDetails")]);

    const handleConfirmOrder = async () => {
        if (selectedPaymentOption === "Cash on delivery") {
            // Assuming you have userId, orderItems, payVia, pickUpOption, totalPrice, and other necessary data available

            const orderData = {
                userId: user?.id,
                orderItems: cartData.data.map(item => `${item.name} x${item.quantity}`),
                payVia: selectedPaymentOption,
                pickUpOption: selectedDeliveryOption,
                totalPrice: totalAmount,
                address: selectedDeliveryOption === "Home Delivery" ? document.querySelector(".address_input").value : null,
                phoneNumber: selectedDeliveryOption === "Home Delivery" ? document.querySelector(".phone_input").value : null,
            };

            try {
                // Send the order data to the backend
                const response = await axios.post("http://localhost:8080/order/save", orderData);

                // Handle the response accordingly
                console.log(response.data);
                // alert("Order placed successfully!");
            } catch (error) {
                // Handle errors
                console.error("Error placing the order", error);
                alert("Error placing the order. Please try again.");
            }
        } else if (selectedPaymentOption === "Pay Via Khalti") {
            // alert("Order placed successfully!");
            // Add any additional logic for cash on delivery
        } else {
            // alert("Please select a valid payment option");
        }
    };



    // Fetching data from API
    const{data:cartData,refetch} = useQuery({
        queryKey:["GET_CART_DATA"],
        queryFn(){
            return axios.get("http://localhost:8080/cart/getAll")
        }
    })

    const cartTotal = cartData?.data.reduce(
        (total, item) => total + item.total_price * item.quantity,
        0
    );

    // State for the selected delivery option
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<string>("");

    // State for the total amount
    const [totalAmount, setTotalAmount] = useState<number>(0);

    // Calculate total amount whenever cartTotal or selectedDeliveryOption changes
    useEffect(() => {
        let newTotalAmount = cartTotal || 0;

        if (selectedDeliveryOption === "Home Delivery") {
            newTotalAmount += 75; // Add delivery fee
        }

        setTotalAmount(newTotalAmount);
    }, [cartTotal, selectedDeliveryOption]);

    //post

    const useApiCall = useMutation({
        mutationKey:["POST_order"],
        mutationFn:(payload:any)=> {
            console.log(payload)
            return axios.post("http://localhost:8080/order/save", payload)
        }
    })

    const onSubmit=(value:any)=>{
        useApiCall.mutate(value)
    }


    return (
        <>
            <div className={"payment-container"}>
                <HomeNavbar activePage={currentLocation} />
                <div className={"payment-text-div"}><h1> Payment<b>Page</b></h1></div>
                <div className="half-hr" />

                <div className={"delivery-mode-container"}>
                    <div className={"delivery-method"}>
                        <div className={"delivery-text"}>
                            <h2> Delivery Section</h2>
                        </div>
                        <div className={"dropdown-delivery"}>
                            <select
                                className={"select-delivery-option"}
                                value={selectedDeliveryOption}
                                onChange={(e) => setSelectedDeliveryOption(e.target.value)}
                            >
                                <option>Select Delivery Mode</option>
                                <option>Self PickUp</option>
                                <option>Home Delivery</option>
                            </select>

                            {selectedDeliveryOption === "Home Delivery" && (
                                <>
                                    <input type="text" className="address_input" placeholder="Enter your Address"/>

                                    <input type="text" className="phone_input" placeholder="Enter your phone number"/>
                                </>

                            )}

                        </div>
                    </div>

                    <div className={"receipt-container"}>
                        <div className={"receipt-container-text"}>
                            <h2> Receipt</h2>
                        </div>
                        <div className={"receipt-text"}>

                            <div className={"sub-total-box"} placeholder={"SUB-TOTAL"}>
                                Cart Total: Rs. {cartTotal}

                            </div>
                            {selectedDeliveryOption === "Home Delivery" && (
                                <div className={'delivery-fee-box'} placeholder={"DELIVERY-FEE"}>
                                    Delivery-Fee: Rs{75}
                                </div>
                            )}
                            <h5>----------------------------------------------</h5>
                            <div className={"Total-box5"} placeholder={"TOTAL"}>
                                Total: Rs. {totalAmount}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={"payment-mode-container"}>
                            <div className={"payment-text"}>
                                <h2> Pay Via</h2>
                            </div>
                            <div className={"dropdown-payment"}>
                                <select
                                    className={"select-payment-option"}
                                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                                >
                                    <option>Select Delivery Option</option>
                                    <option>Cash on delivery</option>
                                    <option>Pay Via Khalti</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className={"confirm-order"}>
                            <button onClick={handleConfirmOrder} style={buttonStyles}>
                                Confirm Order
                            </button>
                        </div>
                    </div>

                </div>
                <hr/>
            </div>
        </>
    );
};

export default Payment;
