import React, {useState} from "react";

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
    let interactiveIcon = null;
    let outdoorIcon = null;
    let interactive = detail.isInteractive;
    if (interactive){interactive = `Interactive`; interactiveIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i>;}
    else {interactive = `Not Interactive`; interactiveIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>; }
    let outdoor = detail.isOutdoor;
    if(outdoor){outdoor = `Able to place Outdoors`; outdoorIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i>;}
    else {outdoor = `Unable to place Outdoors`; outdoorIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>;}
    let customizableBody = detail.canCustomizeBody;
    let customBodyIcon = null;
    let customPatternIcon = null;
    let hha1 = null;
    if (detail['hha-concept-1']){hha1 = `${detail[`hha-concept-1`]}`;}
    if (detail[`hha-concept-2`]){hha1 = `${detail[`hha-concept-1`]} and ${detail[`hha-concept-2`]}`;}
   if (detail.canCustomizeBody){customizableBody =  " Able to customize body"; customBodyIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i> }
  else {customizableBody = `Unable to customize body`; customBodyIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>}
    let customizablePattern = detail.canCustomizePattern;
    if (detail.canCustomizePattern){customizablePattern = `Able to customize pattern`; customPatternIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i>}
    else {customizablePattern = `Unable to customize pattern`; customPatternIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>}
    const id = detail[`file-name`];
    const [buttonText, setButtonText] = useState('More Info');


    function showInfo(){
        let active = document.querySelector('.active');
        let moreInfo = document.getElementById(`${id}`);
        let itemDetails = moreInfo.parentElement.parentElement
        if (active){
            if (document.querySelector(`.active`).id === id) {
                moreInfo.classList.toggle('active');
                moreInfo.style.display = "none";
                itemDetails.style.paddingBottom = "20px";
                itemDetails.style.backgroundColor = "#f3a561";
                itemDetails.style.width = "20%";
                setButtonText("More Info");
            }
            else {
            active.style.display = "none";
            active.classList.toggle('active');
            active.parentElement.parentElement.style.paddingBottom = "20px";
            active.parentElement.parentElement.style.width = "20%";
            active.parentElement.parentElement.style.backgroundColor = "#f3a561";
            moreInfo.classList.toggle('active');
            itemDetails.style.width = "40%";
            itemDetails.style.backgroundColor = "#f7c59a";
            moreInfo.style.display = "block";
            setButtonText("Less Info");
        }
        }
        else {
            itemDetails.style.paddingBottom = "0";
            itemDetails.style.width = "40%";
            itemDetails.style.backgroundColor = "#f7c59a";
            moreInfo.classList.toggle('active');
            moreInfo.style.display = "block";
            setButtonText("Less Info");
        } 
    }

if (detail){ 
    return(
    <span className="details">
        <button className="moreInfoButton" onClick={showInfo}> {buttonText} </button>
        <div className="hidden" id={`${id}`}>
            <div className="row">
            <ul>
                <li>Color: {color} </li>
                <li>Size: {size}</li>
                <li>Obtained from: {source}</li>
                <li>{sourceDetails}</li>
                <li>Buy for: {buyprice} </li>
                <li>Sell for: {sellprice} </li>
            </ul>
            <ul>
                <li>{customBodyIcon} {customizableBody}</li>
                <li>{customPatternIcon} {customizablePattern}</li>
                <li>{interactiveIcon} {interactive}</li>
                <li>{outdoorIcon} {outdoor}</li>
                <li>Happy Home Room Academy Theme:</li>
                <li>{hha1}</li>
            </ul>  
            </div>
        </div>
      
    </span>)
}   
else {return "loading"}
}