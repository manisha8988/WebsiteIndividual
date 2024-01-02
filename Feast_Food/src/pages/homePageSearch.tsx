
interface HomePageSearchProps {
    menuData: {
        id: number;
        image: string;
        name: string;
        category: string;
        price: string;
        description: string;
    }[];
    search: string;
}

const HomePageSearch: React.FC<HomePageSearchProps> = ({ menuData, search }) => {

    const filteredMenuData = search? menuData.filter((Menu) =>
        Menu.name.toLowerCase().includes(search.toLowerCase())
    )
        : [];

    return(
        <>
            <section className={"menu-card--cointainer"}>
                {filteredMenuData?.map((curElem)=>(
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
    )
}

export default HomePageSearch;