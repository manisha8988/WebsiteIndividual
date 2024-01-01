import axios from "axios"; // Import axios for making HTTP requests
import Homedelivery from "./homedelivery.tsx";
import "../css/payment.css";
import { FaRegWindowClose } from "react-icons/fa";
import KhaltiCheckout from "khalti-checkout-web";

const myKey = {
    publicTestKey: "test_public_key_402c2b0e98364222bb1c1ab02369cefd",
    secretKey: "test_secret_key_d46fe88dee964ecfbd0f699a9985f2d4",
};

const config = {
    publicKey: myKey.publicTestKey,
    productIdentity: "123766",
    productName: "Feast Food",
    productUrl: "http://localhost:3000",
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
                    alert("Thank you for your generosity"); // Corrected typo
                })
                .catch((error) => {
                    console.log(error);
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

function Payment() {
    const checkout = new KhaltiCheckout(config);

    const buttonStyles = {
        backgroundColor: "purple",
        padding: "10px",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
        border: "1px solid white",
    };

    return (
        <>

            <div className={"payment-main"}>
                <div className={"cross-icon"}>
                    <button>
            <span>
              <FaRegWindowClose />
            </span>
                    </button>
                </div>

                <div className={"payment-method"}>
                    <h1>Payment</h1>
                    <div className={"esewa"}>
                        <img src={"src/images/esewa.jpeg"} alt="Esewa" width={60} />
                        <h3>Esewa</h3>
                    </div>

                    <div className={"phonepay"}>
                        <img src={"src/images/phonepay.jpeg"} alt="Phonepay" width={60} />
                        <p>Phonepay</p>
                    </div>

                    <div className={"cod"}>
                        <img src={"src/images/cod.jpeg"} alt="Cash on Delivery" width={60} />
                        <p>Cash on Delivery</p>
                    </div>
                </div>

                <div className={"delivery-method"}>
                    <p>
                        <u>Delivery</u>
                    </p>
                    <div className={"self-pickup-button"}>
                        <button>Self Pickup</button>
                    </div>

                    <Homedelivery />

                    <div className={"confirm-order-button"}>
                        <button>Confirm Order</button>
                    </div>
                    <div>
                        <button onClick={() => checkout.show({ amount: 1000 })} style={buttonStyles}>
                            Pay Via Khalti
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Payment;
