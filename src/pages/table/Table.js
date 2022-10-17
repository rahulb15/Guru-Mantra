import React from "react";
import {useEffect, useState} from "react";


export default function Table() {
    const[users, setUsers] = useState([]);
    const[enterData, setEnterData] = useState({
        name: "",
        email: "",
        password: "",
    });



    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value=e.target.value;
        setEnterData({ ...enterData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, enterData]);
        console.log(users);
    }

    useEffect(() => {
        console.log(users);
    }
    , [users]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={enterData.name} onChange={handleInputs} placeholder="Enter your name" />
                <input type="email" name="email" value={enterData.email} onChange={handleInputs} placeholder="Enter your email" />
                <input type="password" name="password" value={enterData.password} onChange={handleInputs} placeholder="Enter your password" />
                <button type="submit">Submit</button>
            </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((curElem) => {
                                return (
                                    <tr>
                                        <td>{curElem.name}</td>
                                        <td>{curElem.email}</td>
                                        <td>{curElem.password}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}




