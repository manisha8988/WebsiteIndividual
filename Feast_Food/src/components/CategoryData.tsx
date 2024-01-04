import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import {useQuery, useMutation} from "@tanstack/react-query";
import axios from "axios";

interface CategoryDataProps {
    search: string;
}

const CategoryData: React.FC<CategoryDataProps> = ({ search }) => {


    // Fetching data from API
    const{data,refetch} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8088/category/findAll")
        }
    })

    //Searching data

    const filteredData = data?.data.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    //Deleting data
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_BY_ID"],
            mutationFn(id:number){
                return axios.delete("http://localhost:8088/category/delete/"+id);
            },onSuccess(){refetch()}
        }
    )

    return (
        <>
            {
                filteredData?.map((i) =>{
                    return(
                        <tr key={i?.id}>
                            <td>{i?.id}</td>
                            <td>{i?.name}</td>
                            <td><button className={"edit-btn2"}><CiEdit /></button></td>
                            <td><button className={"delete-btn2"} onClick={()=>{
                                deleteByIdApi.mutate(i?.id);
                            }}><MdDelete /></button></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default CategoryData;
