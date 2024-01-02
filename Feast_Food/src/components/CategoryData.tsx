import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

interface CategoryDataProps {
    search: string;
}

const CategoryData: React.FC<CategoryDataProps> = ({ search }) => {


    // Fetching data from API
    const{data} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8088/category/findAll")
        }
    })

    //Searching data

    const filteredData = data?.data.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {
                filteredData?.map((i) =>{
                    return(
                        <tr key={i?.id}>
                            <td>{i?.id}</td>
                            <td>{i?.name}</td>
                            <td><button className={"edit-btn2"}><CiEdit /></button></td>
                            <td><button className={"delete-btn2"}><MdDelete /></button></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default CategoryData;
