import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from './GetUser';

const User = () => {
    const [userId, setUserId] = useState(1);
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId },
        skip: !userId,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const user =data?.user;


    return (
        <div className="post-container">

            <h2>User Information</h2>
            <div className="post-controls">
                <label>
                    User ID:
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(parseInt(e.target.value))}
                        min="1"
                    />
                </label>
            </div>
        {user && (
                <div className="post-body">

                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                </div>
    )}
        </div> 
       
    
    );
};

export default User;
