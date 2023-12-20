
import Homedelivery from "./homedelivery.tsx";
import "../css/payment.css"
import {FaRegWindowClose} from "react-icons/fa";

function Payment() {
    return(
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
                <img src={"src/images/esewa.jpeg"}/>
                    <p>Esewa</p>
                </div>

                <div className={"phonepay"}>
                    <img src={"src/images/phonepay.jpeg"}/>
                    <p>Phonepay</p>
                </div>

                <div className={"cod"}>
                    <img src={"src/images/cod.jpeg"}/>
                    <p>Cash on Delivery</p>
                </div>
            </div>

            <div className={"delivery-options"}>
                <p><u>Delivery</u></p>
                <div className={"self-pickup-button"}>
                    <button >
                        Self Pickup
                    </button>
                </div>

                <Homedelivery/>
                <div className={"confirm-order-button"}>
                    <button >
                        Confirm Order
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Payment