import React from "react";
import "./Card.css";

const Card = (props) => {

    const flipCard = () => {
        props.setFlipped(!props.flipped);
    }

    return (
        
        <div className="Card" onClick={flipCard}>
            <div className={`card-inner${props.flipped ? " flipped" : ""}`}>
                <div className="card-front">
                    <h3>What flower is this?</h3>
                    <div className="img-div">
                        <img src={props.img} alt="flower" />
                    </div>
                </div>
                <div className="card-back">
                    <h4>{props.answer}</h4>
                </div>
            </div>
        </div>
    )
} 

export default Card;