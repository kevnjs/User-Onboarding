import React from 'react';

export default function Users (props) {
    const { user } = props;
    return (
        <div className="users">
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>Contact :{user.email}</p>
        </div>
    )
}