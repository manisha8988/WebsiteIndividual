import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import Dropdown from "./dropDown.tsx";
import "../../css/reservationPage.css";
import Reservation from "./reserveTable.tsx";
import { Modal, Button } from 'react-bootstrap';

const ReservationPage = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const [showModal, setShowModal] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSelectTable = (tableId) => {
        setSelectedTable(tableId);
        onSelectTable(tableId);
    };

    return (
        <>
            <div className={"reservation-page"}>
                <HomeNavbar activePage={currentLocation} />
                <div className={"reserv-text"}>
                    <h2>Reservations</h2>
                    <h1>Book a table</h1>
                </div>
                <div className={"info-reservation"}>
                    <input type={"text"} className={"name_input"} placeholder={"Name"} />
                    <input type={"text"} className={"phno_input"} placeholder={"Phone Number"} />
                    <input type={"text"} className={"no_of_people_input"} placeholder={"Number of Persons"} />
                    <Dropdown />
                    <button onClick={handleShowModal}>
                        <li className={currentLocation === "/Reservation" ? "active" : ""}>
                            <a>Choose a Table</a>
                        </li>
                    </button>
                    <span>
                        Selected Table: {selectedTable !== null ? `Table ${selectedTable}` : "No table selected"}
                    </span>
                    <button>Submit</button>
                </div>

                {/* Modal for Reservation */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reservation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Pass selectedTable as a prop to Reservation component */}
                        <Reservation selectedTable={selectedTable} onSelectTable={handleSelectTable} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        {/* Add additional buttons or actions as needed */}
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default ReservationPage;
