import React, { useEffect, useState } from 'react'

const Trial = () => {
    const [userList, setUserList] = useState(['']);
    const [selectedUser, setSelectedUser] = useState(['']);
    const uniqueUser = [...new Set(userList.map(details => details.username))];

    async function TableUsers() {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/show');
            const data = await response.json();
            console.log(data);
            setUserList(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        TableUsers();
    }, []);

    function handleUserChange(evt) {
        setSelectedUser(evt.target.value);
    }

    return (
        <div>
            <label>
                User<select value={selectedUser} onChange={handleUserChange}>
                    <option value=''>All</option>
                    {uniqueUser.map(user => (
                        <option value={user}>
                            {user}
                        </option>
                    ))}
                </select>
            </label>
            <table>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                {userList
                    .filter(details => selectedUser == '' || details.username === selectedUser)
                    .map((details, index) => (
                        <tr key={index}>
                            <td>
                                {details.username}
                            </td>
                            <td>
                                {details.password}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Trial