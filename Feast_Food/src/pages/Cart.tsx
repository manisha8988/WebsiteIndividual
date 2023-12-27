import React, { useState } from 'react';
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
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
    const [price, setPrice] = useState<number>(0);

    const handlePrice = (): void => {
        let ans: number = 0;
        cart.forEach((item) => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    };

    const handleRemove = (id: number): void => {
        const updatedCart: CartItem[] = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        handlePrice();
    };

    return (
        <article>
            {cart?.map((item) => (
                <div className="cart_box" key={item.id}>
                    {/* ... rest of your code ... */}
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs - {price.toFixed(2)}</span>
            </div>
        </article>
    );
};

export default Cart;

