<<<<<<< Updated upstream
import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import "../../css/Cart.css"
import {Link, useLocation} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useState} from "react";


const Cart = () => {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

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

                    }
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
=======
// import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
// import "../../css/Cart.css"
// import {Link, useLocation} from "react-router-dom";
// import {useMutation, useQuery} from "@tanstack/react-query";
// import axios from "axios";
// import {useState} from "react";
//
//
// const Cart = () => {
//
//     const location = useLocation(); // Use useLocation to get the current location
//     const currentLocation = location.pathname;
//
//     // Fetching data from API
//     const{data:cartData,refetch} = useQuery({
//         queryKey:["GET_CART_DATA"],
//         queryFn(){
//             return axios.get("http://localhost:8080/cart/getAll")
//         }
//     })
//
//     // State to manage cart items
//     const [cartItems, setCartItems] = useState(cartData?.data || []);
//
//     // Function to update quantity in the cart
//     const updateQuantity = (itemId, newQuantity) => {
//         // Update the quantity in the local state
//         const updatedCartItems = cartItems.map((item) =>
//             item.id === itemId ? { ...item, quantity: newQuantity } : item
//         );
//
//         // Update the quantity on the server
//         axios.put(http://localhost:8080/cart/updateQuantity/${itemId}, {
//         quantity: newQuantity,
//     });
//
//     // Update the local state and trigger a refetch if needed
//     setCartItems(updatedCartItems);
//     refetch();
// };
//
// //Deleting cart item by id
// const deleteByIdApi=useMutation(
//     {
//         mutationKey:["DELETE_CART_BY_ID"],
//         mutationFn(id:number){
//             return axios.delete("http://localhost:8080/cart/deleteById/"+id);
//         },onSuccess(){refetch()}
//     }
// )
//
// console.log(cartData?.data.id)
// // Calculate total cart price
// const cartTotal = cartData?.data.reduce(
//     (total, item) => total + item.total_price * item.quantity,
//     0
// );
//
// return (
//     <div className={"cart-container"}>
//         <HomeNavbar activePage={currentLocation} />
//         <div className={"cart-text-div"}><h1> Cart<b>Page</b></h1></div>
//         <div className="half-hr" />
//         <div className={"cart-main-container"}>
//             <div className={"cart-heading-grid"}>
//                 <p>Item</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Subtotal</p>
//                 <p>Remove</p>
//
//             </div>
//
//             <div className={"cart-items-container"}>
//                 {
//                     cartData?.data.map((i) =>{
//                         return(
//                             <div className={"items-info"} key={i?.id}>
//                                 <div className={"title"}>
//                                     <h3>{i?.item?.itemName}</h3>
//                                 </div>
//
//                                 <div className={"price"}>
//                                     <h3>Rs. {i?.total_price}</h3>
//                                 </div>
//
//                                 <div className={"add-minus-quantity"}>
//                                     <i
//                                         className={"fas fa-minus minus"}
//                                         onClick={() => {
//                                             const newQuantity = Math.max(0, i?.quantity - 1);
//                                             updateQuantity(i?.id, newQuantity);
//                                         }}
//                                     ></i>
//                                     <input type={"text"} value={i?.quantity} readOnly />
//                                     <i
//                                         className={"fas fa-plus add"}
//                                         onClick={() => {
//                                             const newQuantity = i?.quantity + 1;
//                                             updateQuantity(i?.id, newQuantity);
//                                         }}
//                                     ></i>
//                                 </div>
//
//                                 <div className={"sub-total"}>
//                                     <h3>Rs {i?.total_price*i?.quantity}</h3>
//                                 </div>
//
//                                 <div className={"remove-item"}>
//                                     <i className="fas fa-trash-alt remove" style={{ color: 'red' }} onClick={() => {
//                                         if (window.confirm("Are you sure you want to delete this category?")) {
//                                             deleteByIdApi.mutate(i?.id);
//                                         }
//                                     }}></i>
//                                 </div>
//                             </div>
//                         )
//                     })
//
//                 }
//                 <hr/>
//             </div>
//         </div>
//         <hr />
//
//         <div className={"CheckOut-Container"}>
//             <div className={"cart-total"}>
//                 <h3> Cart Total: Rs. {cartTotal}</h3>
//                 <Link to={"/payment"}><button className={"checkout-button"}>CHECKOUT</button></Link>
//             </div>
//
//         </div>
//     </div>
//
//
// );
// }
//
// export default Cart;
>>>>>>> Stashed changes
