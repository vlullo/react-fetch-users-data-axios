import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        // Fetch some users with axios and the URL variable
        const fetchUsers = async () => {
            const {data} = await axios.get(URL);
            // then update the 'users' piece of state
            setUsers(data);
        };
       
        
        fetchUsers();
        
    }, []);
     
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}

export default App;