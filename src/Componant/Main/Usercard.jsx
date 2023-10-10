
import React, { useState, useEffect } from "react";
import Card from "../Card/card";
import './Usercard.css';

function Usercard() {

    const [users, setUsers] = useState([]);
    const [selecteduser, setSelecteduser] = useState(null);

    useEffect(() => {

        fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
            .then((response) => {
                // if (!response.ok) {
                //     throw new Error('Network response was not ok');
                //   }
                return response.json();

            }).then((data) => {
                setUsers(data.results);

            }).catch((err) => {
                console.error('Error fetching data:', err);
            })


    }, []);

    const selectUser = (user) => {
        setSelecteduser(user);
    }

    return (
        <>
            <div className="card">
                <header className="user-header">
                    <h1>DATA SHOW IN CARD PAGE</h1>
                    {selecteduser && (
                        <div className="selected-user">
                            <Card user={selecteduser} isSelected={true} />

                        </div>
                    )}

                    <div className="user-list">

                        {users.map((user, i) => (
                            <Card
                                key={i}
                                user={user}
                                isSelected={user === selecteduser}
                                onClick={selectUser}

                            />
                        ))}

                    </div>



                </header>
            </div>

        </>
    )
}

export default Usercard;

