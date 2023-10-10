import React from "react";
import './card.css'

function Card({ user, isSelected, onClick }) {

    const { name, email, picture, location, nat, gender, timezone } = user;

    const thumbnail = picture?.thumbnail || '';
    return (
        <>
            <div
                className={`user-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onClick(user)}
            >
                <div >
                    <img src={thumbnail} alt={`${name.first} ${name.last}`} />
                </div>

                <div>
                    <h1>{`${name.title} ${name.first} ${name.last}`}</h1>
                    <p>,{location.street.number},{location.street.name},{location.city},{location.country},{location.postcode}
                    </p>
                    <p>{location.timezone.offset}-{location.timezone.description}</p>
                    <p>{gender}</p>
                </div>
            </div>

        </>
    )


}
export default Card;