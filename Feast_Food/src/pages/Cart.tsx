import React, { useState, useEffect } from 'react';
import '../ourMenu.css';

interface CartItem {
    id: number;
    img: string;
    title: string;
    amount: number;
    price: number;
}

interface CartProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    handleChange: (item: CartItem, change: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState<number>(0);

    const handlePrice = (): void => {
        let ans: number = 0;
        cart.forEach((item) => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    };

    const handleRemove = (id: number): void => {
        const arr: CartItem[] = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    useEffect(() => {
        handlePrice();
    }, [Cart]);

    return (
        <article>
            {cart?.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
        </article>
    );
};

export default Cart;
