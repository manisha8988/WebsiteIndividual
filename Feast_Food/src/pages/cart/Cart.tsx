import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import "../../css/Cart.css"
import {Link, useLocation} from "react-router-dom";
<<<<<<< HEAD
=======
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
>>>>>>> ae5584e5089cab8344191e060552aa8f2935e867
import {useState} from "react";


const Cart = () => {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

<<<<<<< HEAD
    const [count , setCount] =useState(0);

=======
    // Fetching data from API
    const{data:cartData,refetch} = useQuery({
        queryKey:["GET_CART_DATA"],
        queryFn(){
            return axios.get("http://localhost:8080/cart/getAll")
        }
    })

    // State to manage cart items
    const [cartItems, setCartItems] = useState(cartData?.data || []);

    // Function to update quantity in the cart
    const updateQuantity = (itemId, newQuantity) => {
        // Update the quantity in the local state
        const updatedCartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );

        // Update the quantity on the server
        axios.put(`http://localhost:8080/cart/updateQuantity/${itemId}`, {
            quantity: newQuantity,
        });

        // Update the local state and trigger a refetch if needed
        setCartItems(updatedCartItems);
        refetch();
    };

    //Deleting cart item by id
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_CART_BY_ID"],
            mutationFn(id:number){
                return axios.delete("http://localhost:8080/cart/deleteById/"+id);
            },onSuccess(){refetch()}
        }
    )

    console.log(cartData?.data.id)
    // Calculate total cart price
        const cartTotal = cartData?.data.reduce(
            (total, item) => total + item.total_price * item.quantity,
            0
        );
>>>>>>> ae5584e5089cab8344191e060552aa8f2935e867

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
                    {
                        cartData?.data.map((i) =>{
                            return(
                                <div className={"items-info"} key={i?.id}>
                                    <div className={"title"}>
                                        <h3>{i?.item?.itemName}</h3>
                                    </div>

                                    <div className={"price"}>
                                        <h3>Rs. {i?.total_price}</h3>
                                    </div>

<<<<<<< HEAD
                        <div className={"add-minus-quantity"}>
                            <button className={"fas fa-minus minus"} onClick={() =>
                                (count ===0)? setCount(0): setCount(count - 1)}></button>
                            <p>{count}</p>
                            <button className={"fas fa-plus add"} onClick={() => setCount(count + 1)}></button>
                        </div>
=======
                                    <div className={"add-minus-quantity"}>
                                        <i
                                            className={"fas fa-minus minus"}
                                            onClick={() => {
                                                const newQuantity = Math.max(0, i?.quantity - 1);
                                                updateQuantity(i?.id, newQuantity);
                                            }}
                                        ></i>
                                        <input type={"text"} value={i?.quantity} readOnly />
                                        <i
                                            className={"fas fa-plus add"}
                                            onClick={() => {
                                                const newQuantity = i?.quantity + 1;
                                                updateQuantity(i?.id, newQuantity);
                                            }}
                                        ></i>
                                    </div>

                                    <div className={"sub-total"}>
                                        <h3>Rs {i?.total_price*i?.quantity}</h3>
                                    </div>
>>>>>>> ae5584e5089cab8344191e060552aa8f2935e867

                                    <div className={"remove-item"}>
                                        <i className="fas fa-trash-alt remove" style={{ color: 'red' }} onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this category?")) {
                                                deleteByIdApi.mutate(i?.id);
                                            }
                                        }}></i>
                                    </div>
                                </div>
                            )
                        })

<<<<<<< HEAD
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
=======
                    }
>>>>>>> ae5584e5089cab8344191e060552aa8f2935e867
                    <hr/>
                </div>
            </div>
            <hr />

            <div className={"CheckOut-Container"}>
                <div className={"cart-total"}>
                    <h3> Cart Total: Rs. {cartTotal}</h3>
                    <Link to={"/payment"}><button className={"checkout-button"}>CHECKOUT</button></Link>
                </div>

            </div>
        </div>


    );
}

export default Cart;
