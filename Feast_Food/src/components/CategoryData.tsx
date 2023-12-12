import React from "react";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";


interface User {
    id: number;
    name: string;
    email: string;
}

interface UserDataProps {
    users: User[];
}

const CategoryData: React.FC<UserDataProps> = ({ users }) => {
    return (
        <>
            {users.map((curUser) => {
                const { id, name } = curUser;

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
