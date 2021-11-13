import React from "react";


export default function Art(props){

    const details = props.data[1];
    if (details) 
    {
        const image = details['image_uri'];
        const buyPrice = details['buy-price'];
        const sellPrice = details['sell-price'];
        let hasFake = details.hasFake;
        let falseIcon = null;
        if (hasFake){hasFake = "Yes"; falseIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i>}
        else {hasFake = "No"; falseIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>}
        console.log(details.hasFake);
        const museumDesc = details['museum-desc'];
        return(
            <span className="Art">
                <h2>{props.name}</h2>
                <a href={image} target="_blank"><img src={image} alt={props.name} /></a>
                <ul>
                    <li>Has Fake: {falseIcon} {hasFake}</li>
                    <li>Buy for: {buyPrice} bells</li>
                    <li>Sell for: {sellPrice} bells</li>
                    <li>{museumDesc}</li>
                </ul>
            </span>
        )
    }
 
else 
    {return "currently loading"}
}