import {useLocation} from "react-router-dom";
import {useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import AdminSidebar from "./adminSidebar.tsx";
import {FaSearch} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import "../css/adminEvent.css"

function AdminEvent(){
            const location = useLocation();
            const currentLocation = location.pathname;

            const[search, setSearch] = useState('');

            // Fetching data from API
            const{data,refetch} = useQuery({
            queryKey:["GETEVENTDATA"],
            queryFn(){
            return axios.get("http://localhost:8080/event/getAll")
        }
        })

            //Searching data
            // Filtered data based on the search input (name, email, or ID)
            const filteredData = data?.data.filter((event) =>
            event.name.toLowerCase().includes(search.toLowerCase())
            );

            console.log(filteredData)

            // Dynamically calculate the number of events
            const userLength = filteredData ? filteredData.length : 0;

            //Deleting data
            const deleteEventByIdApi=useMutation(
        {
            mutationKey:["DELETE_EVENT_BY_ID"],
            mutationFn(id:number){
            return axios.delete("http://localhost:8080/event/deleteEventById/"+id);
        },onSuccess(){refetch()}
        }
            )

            return(
            <>
            <div className={"event-page"}>
        <AdminSidebar activePage={currentLocation}/>

        <div className={"event-page-right"}>
            <header className={"event-page-header"}>
                <h1>Manage Event</h1>

                <div className={"search-wrapper2"} style={{width:"16rem"}}>
                    <span><FaSearch /></span>
                    <input type={"search"} placeholder={"Search Event"} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </header>
            <div className={"event-page-main"}>
                <div className={"no-of-event"}>
                    <h2>No. of Events Booking: {userLength}</h2>
                </div>
                <table className={"event-table"}>
                    <thead>
                    <tr>
                        <th className={"id-box4"}>ID</th>
                        <th className={"name-box4"}>Name</th>
                        <th className={"contact-box4"}>Contact</th>
                        <th className={"contact-box4"}>No. of Guest</th>
                        <th className={"contact-box4"}>Date</th>
                        <th className={"contact-box4"}>Time</th>
                        <th className={"name-box4"}>Special Request</th>
                        <th className={"contact-box4"}>Status</th>
                        <th className={"delete-box2"}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData?.map((event) => (
                        <tr key={event?.id}>
                            <td>{event?.id}</td>
                            <td>{event?.user_id}</td>
                            <td>{event?.contact}</td>
                            <td>{event?.noOfGuest}</td>
                            <td>{event?.eventPrice}</td>
                            <td>{event?.eventDate}</td>
                            <td>{event?.evetTime}</td>
                            <td>{event?.specialRequest}</td>
                            <td>{event?.eventStatus}</td>
                            <td>
                                <button
                                    className={"delete-btn2"}
                                    onClick={() => {
                                        if (window.confirm(
                                            "Are you sure you want to delete this event?"))
                                        {deleteEventByIdApi.mutate(event?.id);}
                                    }}>
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    )
}
export default AdminEvent;
