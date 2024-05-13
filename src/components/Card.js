import React from "react";

export default function Card() {

    const [contact, setContact] = React.useState(
        {
            firstName: "Mohamed",
            lastName: "Akmal",
            phone: "+94 777777777",
            email: "abcd1234@gmail.com",
            isFavorite: false
        }
    )

    let starIcon = contact.isFavorite ? "star.png" : "empty.png"

    function toggleFavorite() {
        setContact(prevState => {
            return {
                ...prevState,
                isFavorite: !prevState.isFavorite
            }
        })
    }

    return(
        <div className="card">
            <img src="../images/images.png" className="profile"/>
            <div className="content">
                <img src={`../images/${starIcon}`} onClick={toggleFavorite} className="star"/>
                <h1>{contact.firstName} {contact.lastName}</h1>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}