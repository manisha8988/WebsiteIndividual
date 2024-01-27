// import React from 'react';

import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import "../../css/Cart.css"
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";


const Cart = () => {
    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    const [count , setCount] =useState(0);


    return (
        <div className={"cart-container"}>
            <HomeNavbar activePage={currentLocation} />
            <div className={"cart-text-div"}><h1> Cart<b>Page</b></h1></div>
            <div className="half-hr" />
            <div className={"cart-main-container"}>
                <div className={"cart-heading-grid"}>
                    <p>Item</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                    <p>Remove</p>

                </div>

                <div className={"cart-items-container"}>
                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>House Salad</h2>
                            <p>Fresh and healthy</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs200</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <button className={"fas fa-minus minus"} onClick={() =>
                                (count ===0)? setCount(0): setCount(count - 1)}></button>
                            <p>{count}</p>
                            <button className={"fas fa-plus add"} onClick={() => setCount(count + 1)}></button>
                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs400</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{color: 'red'}}></i>
                        </div>
                    </div>
                    <hr/>

                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>French Fries</h2>
                            <p>Crispy and tasty</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs250</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <i className={"fas fa-minus minus"}> </i>
                            <input type={"text"} placeholder={"1"}/>
                            <i className={"fas fa-plus add"}> </i>

                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs250</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{ color: 'red' }}></i>
                        </div>
                    </div>
                    <hr/>

                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>corn</h2>
                            <p>Fresh and healthy</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs400</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <i className={"fas fa-minus minus"}> </i>
                            <input type={"text"} placeholder={"1"}/>
                            <i className={"fas fa-plus add"}> </i>

                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs400</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{ color: 'red' }}></i>
                        </div>
                    </div>
                    <hr/>

                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>Chips</h2>
                            <p>Fresh and healthy</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs50</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <i className={"fas fa-minus minus"}> </i>
                            <input type={"text"} placeholder={"2"}/>
                            <i className={"fas fa-plus add"}> </i>
                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs100</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{ color: 'red' }}></i>
                        </div>
                    </div>
                    <hr/>

                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>pizza</h2>
                            <p>Fresh and healthy</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs80</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <button className={"fas fa-minus minus"} onClick={() => setCount(count-1)}> </button>
                            <p>{count}</p>
                            <button className={"fas fa-plus add"} onClick={() => setCount(count + 1)}></button>
                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs160</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{ color: 'red' }}></i>
                        </div>
                    </div>
                    <hr/>

                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>Non-Veg-Tha</h2>
                            <p>Fresh and healthy</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs180</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <i className={"fas fa-minus minus"}> </i>
                            <input type={"text"} placeholder={"1"}/>
                            <i className={"fas fa-plus add"}> </i>

                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs180</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{ color: 'red' }}></i>
                        </div>
                    </div>
                    <hr/>

                    <div className={"items-info"}>
                        <div className={"title"}>
                            <h2>Sweets</h2>
                            <p>Fresh and healthy</p>
                        </div>

                        <div className={"price"}>
                            <h3> Rs85</h3>
                        </div>

                        <div className={"add-minus-quantity"}>
                            <i className={"fas fa-minus minus"}> </i>
                            <input type={"text"} placeholder={"2"}/>
                            <i className={"fas fa-plus add"}> </i>

                        </div>

                        <div className={"sub-total"}>
                            <h3> Rs170</h3>
                        </div>

                        <div className={"remove-item"}>
                            <i className="fas fa-trash-alt remove" style={{ color: 'red' }}></i>
                        </div>
                    </div>
                    <hr/>
                </div>


            </div>
            <hr />

            <div className={"CheckOut-Container"}>
                <div className={"cart-total"}>
                    <h3> Cart Total: 1345</h3>
                    <Link to={"/payment"}><button className={"checkout-button"}>CHECKOUT</button></Link>
                </div>

            </div>
        </div>


    );
}

export default Cart;
