import React from "react";

export default function Details(props){
    const detail = props.data;
    let buyprice = `${detail[`buy-price`]} bells`;
    if (detail[`buy-price`] === null){buyprice = "Cannot Buy Item";}
    const sellprice = `${detail[`sell-price`]} bells`;
    const image = detail[`image_uri`];
    const source = detail.source;
    const sourceDetails = detail[`source-detail`];
    const color = detail[`color-1`]
    const size = detail.size;
    let interactive = detail.isInteractive;
    if (interactive){interactive = `Interactive`;}
    else {interactive = `Not Interactive`;}
    let outdoor = detail.isOutdoor;
    if(outdoor){outdoor = `Able to place Outdoors`;}
    else {outdoor = `Unable to place Outdoors`;}
    let customizableBody = detail.canCustomizeBody;
    let customBodyIcon = null;
    let customPatternIcon = null;
    let hha1 = null;
    if (detail['hha-concept-1']){hha1 = `Happy Home Room Academy Theme: ${detail[`hha-concept-1`]}`;}
    let hha2 = null;
    if (detail[`hha-concept-2`]){hha2 = `Happy Home Room Academy Theme 2: ${detail[`hha-concept-2`]}`;}
   if (detail.canCustomizeBody){customizableBody =  " Able to customize body"; customBodyIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i> }
  else {customizableBody = `Unable to customize body`; customBodyIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>}
    let customizablePattern = detail.canCustomizePattern;
    if (detail.canCustomizePattern){customizablePattern = `Able to customize pattern`; customPatternIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i>}
    else {customizablePattern = `Unable to customize pattern`; customPatternIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>}

if (detail){ 
    return(<span className="details">
        <img src={image} alt={props.name} loading="lazy" />
        <ul>
            <li>Color: {color} </li>
            <li>Size: {size}</li>
            <li>Obtained from: {source}</li>
            <li>{sourceDetails}</li>
            <li>Buy for: {buyprice} </li>
            <li>Sell for: {sellprice} </li>
            <li>{customBodyIcon} {customizableBody}</li>
            <li>{customPatternIcon} {customizablePattern}</li>
            <li>{interactive}</li>
            <li>{outdoor}</li>
            <li>{hha1}</li>
            <li>{hha2}</li>
        </ul>
    </span>)
}   
else {return "loading"}
}