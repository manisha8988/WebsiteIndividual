// import {CiEdit} from "react-icons/ci";
// import {MdDelete} from "react-icons/md";
// import { useQuery} from "@tanstack/react-query";
// import axios from "axios";
//
//
// const ItemData = () => {
//
//     // Fetching data from API
//     const{data} = useQuery({
//         queryKey:["GET_ITEM_DATA"],
//         queryFn(){
//             return axios.get("http://localhost:8080/product/findAll")
//         }
//     })
//
//     console.log(data)
//     //Searching data
//     // const filteredItemData = data?.data.filter((category) =>
//     //     category.name.toLowerCase().includes(search.toLowerCase())
//     // );
//
//     //Deleting data
//     // const deleteByIdApi=useMutation(
//     //     {
//     //         mutationKey:["DELETE_ITEM_BY_ID"],
//     //         mutationFn(id:number){
//     //             return axios.delete("http://localhost:8080/product/delete/"+id);
//     //         },onSuccess(){refetch()}
//     //     }
//     // )
//
//
//
//     return (
//         <>
//             {data?.data.map((i) => (
//                 <tr key={i.id}>
//                     <td>{i.id}</td>
//                     <td>{i.productName}</td>
//                     <td>{i.category}</td>
//                     <td>{i.productImage}</td>
//                     <td>{i.Price}</td>
//                     <td><button className={"edit-btn3"}><CiEdit /></button>
//                         <button className={"delete-btn3"}><MdDelete /></button></td>
//                     {/*<td>{i.itemStatus}</td>*/}
//                 </tr>
//             ))}
//         </>
//     );
// };
//
// export default ItemData;
