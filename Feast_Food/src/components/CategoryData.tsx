import React from "react";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";


interface Category {
    id: number;
    name: string;
}

interface CategoryDataProps {
    categorys: Category[];
}

const CategoryData: React.FC<CategoryDataProps> = ({ categorys }) => {
    return (
        <>
            {categorys.map((curCategory) => {
                const { id,name } = curCategory;

                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td><button className={"edit-btn2"}><CiEdit /></button></td>
                        <td><button className={"delete-btn2"}><MdDelete /></button></td>
                    </tr>
                );
            })}
        </>
    );
};

export default CategoryData;
