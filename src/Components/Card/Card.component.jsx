import React from 'react';
import './../../App.css';

export const Card = (props) => {
    console.log("card", props)
    return (
        <div className="Card">
            <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h4>{props.monster.name}</h4>
            <h4>{props.monster.email}</h4>
        </div>

    )
}
export default Card;