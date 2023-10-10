import React, { useState } from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCardClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            {users.map((user) => (
                <UserCard
                    key={user.email}
                    user={user}
                    isSelected={user === selectedUser}
                    onClick={handleCardClick}
                />
            ))}
        </div>
    );
}

export default UserList;