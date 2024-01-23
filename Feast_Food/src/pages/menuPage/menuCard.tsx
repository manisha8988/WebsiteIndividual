
const MenuCard = ({ menuData }) => {


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