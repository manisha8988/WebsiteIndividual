import {useState} from "react";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={"dropdown"}>
                <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
                {isOpen && (
                    <div>
                        <select>
                            <option>oner</option>
                            <option>two</option>
                            <option>three</option>
                        </select>
                    </div>
                )}
            </div>
        </>

    );
}
export default Dropdown