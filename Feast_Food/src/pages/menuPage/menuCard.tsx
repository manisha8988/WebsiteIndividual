import React from "react";

const MenuCard: React.FC<{ menuData: any }> = ({ menuData }) => {



    const addToCartHandler = async (item) => {
        try {
            const response = await fetch("http://localhost:8080/cart/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    itemName: item.itemName,
                    // Add other properties as needed
                }),
            });

            if (response.ok) {
                // Handle success, e.g., update UI or show a notification
                console.log("Item added to cart successfully");
            } else {
                // Handle error, e.g., show an error message
                console.error("Failed to add item to cart");
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }

        // Call the parent onAddToCart handler
    };



    return (
        <>
            <section className="menu-card--cointainer">
                {menuData && menuData.length > 0 ? (
                    menuData.map((curElem: any) => (
                        <div className="menu-card-container" key={curElem?.id}>
                            <div className="menu-card">
                                <div className="menu-card-body">
                                    <span className="menu-card-author subtle">{curElem?.category?.name}</span>
                                    <img src={'data:image/jpeg;base64,'+curElem?.itemImage} alt={curElem?.itemName} className="menu-card-media" />
                                    <h2 className="menu-card-title">{curElem?.itemName}</h2>
                                    <div className={"price-addtocart-div"}>
                                        <h4 className="menu-card-price subtle">Rs. {curElem?.itemPrice}</h4>
                                        <span>
                                            <button className="add-to-card-btn subtle">Add to Cart</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No menu items available</div>
                )}
            </section>
        </>
    );
};

export default MenuCard;