import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const UserList = () => {
    const [userList, setUserList] = useState([]);

    async function fetchUserList() {
        try {
            const token = Cookies.get('token'); // Retrieve token from cookie
            const response = await fetch('http://localhost:8000/users/show', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUserList(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUserList();
    }, []);

    return (
        <div>
            <h1>
                User List
            </h1>

            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody>
                    {userList.map((details, index) => (
                        <tr key={index}>
                            <td>{details.userid}</td>
                            <td>{details.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;