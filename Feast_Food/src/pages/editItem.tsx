import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";
import ManageItem from "./ManageItem.tsx";
import "../css/editItem.css"
import {X} from "lucide-react";
import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

const EditItem = ()=>{

    const navigate = useNavigate();

    const useApiCall = useMutation({
        mutationKey:["POST_ITEM_MANAGEITEM"],
        mutationFn:(payload:any)=>{
            // console.log(payload)
            return axios.post("http://localhost:8080/item/save",payload)
        },onSuccess: () => {
            notify();
            reset();
            navigate("/ManageItem");
        }
    })

    const onSubmit=(value:any)=>{
        console.log(value);
        const fd= new FormData();
        fd.append("productName",value?.itemName)
        fd.append("price",value?.itemPrice)
        fd.append("categoryId",value?.categoryId)
        // fd.append("productImage",value?.productImage[0])
        useApiCall.mutate(fd)
    }

    //To update
    const{pk_id} = useParams();
    const{data:getItemByIdApi}=useQuery({
        queryKey:["GET_BY_ID_CATEGORY_API"],
        queryFn(){
            return axios.get("http://localhost:8080/item/findById/"+pk_id)
        },enabled:!!pk_id
    })

    //hitting server on port 8080
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm({values:getItemByIdApi?.data});

    const{errors} = formState;

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    const notify = () =>toast.success('Item Edited Successfully', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
    const [editProduct, setEdit] = useState(false);


    if (editProduct) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    const [modal, setModal] = useState(false);

    const toggleItemModal = () => {
        if (modal) {
            reset(); // Reset the form
        }
        setModal(!modal); // Toggle the modal
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    return(
        <>
            <ManageItem activePage={currentLocation} />
            <div className="edit-item-modal">
                <div onClick={toggleItemModal} className="add-item-overlay"></div>

                <div className="edit-item-modal-content">
                    <h2>Edit Item</h2>
                    <button className="close-edit-item-btn"  onClick={() => {
                        toggleItemModal();
                        reset(); // Reset the form
                    }}>
                        <X/>
                    </button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={"edit-item-name"}>
                            <label>Item Name</label>
                            <input type={"text"}
                                   placeholder={"Enter item Name"} {...register("itemName", {required: "Item Name is required!!"})}/>
                            <h6 style={{paddingLeft: "3px"}}>{errors?.itemName?.message}</h6>
                        </div>
                        <div className={"edit-item-price"}>
                            <label>Price</label>
                            <input type={"number"}
                                   placeholder={"Enter the Price"} {...register("itemPrice", {required: "Price is required!!"})}/>
                            <h6 style={{paddingLeft: "3px"}}>{errors?.itemPrice?.message}</h6>
                        </div>


                        <div className={"item-name-add-btn2"}>
                            <button type={"submit"}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default EditItem;