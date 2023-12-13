import React from "react";

interface MenuCardProps {
    menuData: {
        id: number;
        name: string;
        category: string;
        image: string;
        description: string;
        price: string;
    }[];
}

const MenuCard: React.FC<MenuCardProps> = ({ menuData }) => {
    return (
        <>
            <section className="menu-card--cointainer">
                {menuData.map((curElem) => (
                    <div className="menu-card-container" key={curElem.id}>
                        <div className="menu-card">
                            <div className="menu-card-body">
                                <span className="menu-card-author subtle"> {curElem.category}</span>
                                <img src={curElem.image} alt="images" className="menu-card-media" />
                                <h2 className="menu-card-title"> {curElem.name} </h2>
                                <h4 className="menu-card-price subtle">{curElem.price}</h4>
                            </div>
                            <span className="menu-card-tag subtle">Add to Cart</span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default MenuCard;
