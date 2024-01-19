import React from "react";

interface MenuCardProps {
    menuData: {
        id: number;
        name: string;
        category: string;
        image: string;
        price: string;
    }[];
}

const MenuCard: React.FC<MenuCardProps> = ({ menuData }) => {
    return (
        <>
            <section className="menu-card--cointainer">
                {menuData && menuData.length > 0 ? (
                    menuData.map((curElem: any) => (
                        <div className="menu-card-container" key={curElem?.id}>
                            <div className="menu-card">
                                <div className="menu-card-body">
                                    <span className="menu-card-author subtle">{curElem?.category?.name}</span>
                                    <img src={'data:image/jpeg;base64,'+curElem?.productImage} alt={curElem?.productName} className="menu-card-media" />
                                    <h2 className="menu-card-title">{curElem?.productName}</h2>
                                    <div className={"price-addtocart-div"}>
                                        <h4 className="menu-card-price subtle">Rs. {curElem?.price}</h4>
                                        <span>
                                            <button className="add-to-card-btn subtle">Add to Cart</button>
                                        </span>
                                    </div>
                {menuData.map((curElem) => (
                    <div className="menu-card-container" key={curElem.id}>
                        <div className="menu-card">
                            <div className="menu-card-body">
                                <span className="menu-card-author subtle"> {curElem.category}</span>
                                <img src={curElem.image} alt="images" className="menu-card-media" />
                                <h2 className="menu-card-title"> {curElem.name} </h2>
                                <div className={"price-addtocart-div"}>
                                    <h4 className="menu-card-price subtle">{curElem.price}</h4>
                                    <span><button className="add-to-card-btn subtle">
                                        Add to Cart
                                    </button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default MenuCard;
