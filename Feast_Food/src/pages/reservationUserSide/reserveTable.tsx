import "../../css/reserveTable.css";
import {Link} from "react-router-dom";
import {useState} from "react";
// import {useMutation, useQuery} from "@tanstack/react-query";
// import axios from "axios";
// import {useForm} from "react-hook-form";

function Reservation() {
    const [showModal, setShowModal] = useState(false);
    const [tableStatus, setTableStatus] = useState("available");

    const [selectedTable, setSelectedTable] = useState(null);

    const handleShowModal = () => {
        if (tableStatus === "available") {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const handleSelectTable = (tableId) => {
        setSelectedTable(tableId);
        // Additional logic for handling the selected table, e.g., updating reservation data
    };

    return(
        <>
            <div className={"reserve-table"}>
                <div className={"wrapper10"}>
                    <div className={"reserv-text"}>
                        <h2>Reservations</h2>
                        <h1>Choose a table</h1>
                    </div>

                    <div>
                    </div>
                    <div className={"row1"}>
                        <div className={"table1"}>
                            <img className={"table1photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:1</h5>
                            <div className={"status"}>
                                <h6>Status:</h6>
                                <span className={tableStatus}>{tableStatus}</span>
                            </div>
                            <button className={"select-button"} onClick={() => handleSelectTable(1)} disabled={tableStatus === "booked"}>
                                Select
                            </button>
                        </div>
                        <div className={"table2"}>
                            <img className={"table2photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:2</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(2)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table3"}>
                            <img className={"table3photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:3</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(3)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table4"}>
                            <img className={"table11photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:4</h5>
                            <div className={"status"}>
                                <h6>Status:</h6>
                                <span className={tableStatus}>{tableStatus}</span>
                            </div>
                            <button className={"select-button"} onClick={() => handleSelectTable(4)} disabled={tableStatus === "booked"}>
                                Select
                            </button>
                        </div>

                    </div>
                    <div className={"row2"}>
                        <div className={"table5"}>
                            <img className={"table5photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:5</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(5)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table6"}>
                            <img className={"table6photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:6</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(6)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table7"}>
                            <img className={"table7photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:7</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(7)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table8"}>
                            <img className={"table8photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:8</h5>
                            <div className={"status"}>
                                <h6>Status:</h6>
                                <span className={tableStatus}>{tableStatus}</span>
                            </div>
                            <button className={"select-button"} onClick={() => handleSelectTable(8)} disabled={tableStatus === "booked"}>
                                Select
                            </button>
                        </div>
                    </div>
                    <div className={"row3"}>
                        <div className={"table9"}>
                            <img className={"table9photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:9</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(9)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table10"}>
                            <img className={"table10photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:10</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(10)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className={"table11"}>
                            <img className={"table11photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:11</h5>
                            <div className={"status"}>
                                <div className={"status"}>
                                    <h6>Status:</h6>
                                    <span className={tableStatus}>{tableStatus}</span>
                                </div>
                                <button className={"select-button"} onClick={() => handleSelectTable(11)} disabled={tableStatus === "booked"}>
                                    Select
                                </button>
                            </div>

                        </div>
                        <div className={"table12"}>
                            <img className={"table11photo"} width={100} src={"src/images/Table1.jpeg"}/>
                            <h5>Table No:12</h5>
                            <div className={"status"}>
                                <h6>Status:</h6>
                                <span className={tableStatus}>{tableStatus}</span>
                            </div>
                            <button className={"select-button"} onClick={() => handleSelectTable(12)} disabled={tableStatus === "booked"}>
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation;