import React from 'react'

function Card(props){
    return(
        <div>
            <h2>Name: {props.mycard.name}</h2>
            <h3>Location: {props.mycard.location}</h3>
            <h3>Bio: {props.mycard.bio}</h3>
        </div>
    )
}

export default Card