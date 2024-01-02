import '../css/CustomizePizza.css'
import {FaRegWindowClose} from "react-icons/fa";

function CustomizePizzaPage(){

    return(
        <>
            <div className="menu">
                <div className={"closee"}>
                    <button className="close-button"><FaRegWindowClose/></button>
                </div>
                <div className="menu-heading">
                    Customize Your Order
                </div>
                <div className={"line-top"}>
                </div>
                <div className="menu-items">
                    <div className="item-left">
                        <div className={"sub-heading-left"}>Items</div>
                        <div className="item"><input className={"tick"} type={"checkbox"}/>Extra Cheese</div>
                        <div className="item"><input className={"tick"} type={"checkbox"}/>Extra Meat</div>
                        <div className="item"><input className={"tick"} type={"checkbox"}/>Extra Mozzarella</div>
                        <div className="item"><input className={"tick"} type={"checkbox"}/>Extra Basil</div>
                        <div className="item"><input className={"tick"} type={"checkbox"}/>Extra Veggies</div>
                    </div>
                    <div className="item-right">
                        <div className={"sub-heading-right"}>Total Price</div>
                        <div className="item-price">Rs.60</div>
                        <div className="item-price">Rs.200</div>
                        <div className="item-price">Rs.35</div>
                        <div className="item-price">Rs.30</div>
                        <div className="item-price">Rs.100</div>
                    </div>
                </div>
                <div className={"line-bottom"}>
                </div>
                <div className={"send-button"}>
                    <button className={"customize-button"}>customize</button>
                </div>
            </div>
        </>
    )
}

export default CustomizePizzaPage;