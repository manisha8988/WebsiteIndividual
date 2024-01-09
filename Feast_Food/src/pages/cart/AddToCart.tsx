// import {useState} from "react";
// import {NavLink} from "react-bootstrap";
//
//
// const  AddToCart = ({menuApi})=>{
//     const[amount, setAmount]= useState(1);
//
//     const setDecrease= ()=>{
//         amount >1? SetAmount(amount -1): setAmount(1);
//     }
//     const setIncrease= ()=>{
//         amount < stock ? SetAmount(amount +1): setAmount(stock);
//     }
//
//
//     return(
//         <>
//             <CartAmountToggle
//                 amount={amount}
//                 setDecrease={setDecrease}
//                 setIncrease={setIncrease}
//             />
//             <NavLink to={"/Cart"} onClick={()=> addToCart(id,amount, product)}>
//                 <Button className={"btn"}>Add To Cart</Button>
//
//             </NavLink>
//         </>
//
//     );
//
// }
