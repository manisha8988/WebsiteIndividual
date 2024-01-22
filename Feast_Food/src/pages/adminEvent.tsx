import {useLocation} from "react-router-dom";
import { useQuery} from "@tanstack/react-query";
import axios from "axios";
import AdminSidebar from "./adminSidebar.tsx";
import {CiEdit} from "react-icons/ci";
import "../../src/css/adminEvent.css"

function AdminEvent(){

    const location = useLocation();
    const currentLocation = location.pathname;

    // const[search, setSearch] = useState('');

    // Fetching data from API
    const{data} = useQuery({
    queryKey:["GET_EVENT_DATA"],
    queryFn(){
    return axios.get("http://localhost:8080/event/getAll")
        }
    })

        const filteredData = data?.data;
        console.log(filteredData)


            //Deleting data
        //     const deleteUserByIdApi=useMutation(
        // {
        //     mutationKey:["DELETE_CUSTOMER_BY_ID"],
        //     mutationFn(id:number){
        //     return axios.delete("http://localhost:8080/register/deleteUserById/"+id);
        // },onSuccess(){refetch()}
        // }
        //     )

    return(
            <>
            <div className={"customer-page"}>
                <AdminSidebar activePage={currentLocation}/>

                <div className={"customer-page-right"}>
                    <header className={"customer-page-header"}>
                        <h1>Events</h1>
                    </header>
                    <div className={"customer-page-main"}>
                        <div className={"no-of-customer"}>
                            <h2>Events: </h2>
                        </div>
                        <table className={"event-table1"}>
                            <thead>
                                 <tr>
                                    <th className={"id-box5"}>ID</th>
                                    <th className={"name-box5"}>Name</th>
                                    <th className={"description-box"}>Description</th>
                                    <th className={"image-box5"}>Image</th>
                                    <th className={"price-box5"}>Price</th>
                                    <th className={"edit-box5"}>Action</th>
                                </tr>
                            </thead>
                             <tbody>
                                {filteredData?.map((customer) => (
                                    <tr key={customer?.id}>
                                        <td>{customer?.id}</td>
                                        <td>{customer?.eventName}</td>
                                        <td>{customer?.eventDescription}</td>
                                        <td><img src={customer?.eventImage} height={"40px"}/></td>
                                        <td>{customer?.eventPrice}</td>
                                        <td>
                                            <button className={"edit-btn2"} onClick={()=>{
                                                // navigate("/edit/"+customer?.id);
                                                console.log(customer?.id)
                                            }}><CiEdit /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={"no-of-customer"}>
                            <h2>Events Booked </h2>
                        </div>
                        <table className={"event-table2"}>
                            <thead>
                            <tr>
                                <th className={"id-box5"}>ID</th>
                                <th className={"name-box5"}>Name</th>
                                <th className={"description-box"}>Description</th>
                                <th className={"image-box5"}>Image</th>
                                <th className={"price-box5"}>Price</th>
                                <th className={"edit-box5"}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredData?.map((customer) => (
                                <tr key={customer?.id}>
                                    <td>{customer?.id}</td>
                                    <td>{customer?.fullName}</td>
                                    <td>{customer?.email}</td>
                                    <td>{customer?.id}</td>
                                    <td>{customer?.id}</td>
                                    <td>
                                        <button className={"edit-btn2"} onClick={()=>{
                                            // navigate("/edit/"+customer?.id);
                                            console.log(customer?.id)
                                        }}><CiEdit /></button>
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
