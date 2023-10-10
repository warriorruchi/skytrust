import React, { useState, useEffect } from "react";
import "./Productpage.css";

function Pagecard() {
    const [users, setUsers] = useState([]);
    const [selecteduser, setSelecteduser] = useState(null);

    useEffect(() => {
        fetch(
            "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
        )
            .then((response) => response.json())
            .then((data) => {
                //   console.log(data);
                setUsers(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    function onClick(user) {
        setSelecteduser(user);
    }

    return (
        <>
            <div className="card">
                <header className="user-header">
                    {selecteduser && (
                        <>
                            <div className="user-card-p">
                                <div>
                                    <img
                                        src={selecteduser.picture?.thumbnail || ""}
                                        alt={`${selecteduser.name.first} ${selecteduser.name.last}`}
                                    />
                                </div>
                                <div>
                                    <h1>{`${selecteduser.name.title}. ${selecteduser.name.first} ${selecteduser.name.last}`}</h1>
                                    <p>
                                        <span style={{ color: "gray" }}>{selecteduser.location.street.number}</span>,{selecteduser.location.street.name},
                                        {selecteduser.location.city},{selecteduser.location.state},
                                        <span style={{ fontWeight: "bold" }}> {selecteduser.location.country}</span>,
                                        {selecteduser.location.postcode}
                                    </p>
                                    <p>
                                        {selecteduser.location.timezone.offset} -
                                        {selecteduser.location.timezone.description}
                                    </p>
                                    <p style={{ color: "gray" }}>{selecteduser.gender.charAt(0).toUpperCase() + selecteduser.gender.slice(1)}</p>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="user-list">
                        <>
                            {users.map((user, i) => (
                                <div className="user-card" onClick={() => onClick(user)}>
                                    <>
                                        <p>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</p>
                                        <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                                        <p>{user.email}</p>
                                    </>
                                </div>
                            ))}
                        </>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Pagecard;