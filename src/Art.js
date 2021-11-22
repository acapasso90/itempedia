import React, {useState} from "react";
import loader from "./media/loader.gif";


export default function Art(props){
    const [buttonText, setButtonText] = useState('More Info');

    const details = props.data[1];


    if (details) 
    {
        const image = details['image_uri'];
        const buyPrice = details['buy-price'];
        const sellPrice = details['sell-price'];
        const name = props.name;
        const formatName = name.replace(" ", "_");
        let hasFake = details.hasFake;
        let falseIcon = null;
        if (hasFake){hasFake = "Yes"; falseIcon = <i className="fas fa-check-circle" style={{color: "green"}}></i>}
        else {hasFake = "No"; falseIcon = <i className="fas fa-times-circle" style={{color: "red"}}></i>}
        const museumDesc = details['museum-desc'];

        function showInfo(){
            let active = document.querySelector('.activeArt');
            let moreInfo = document.getElementById(`${formatName}`);
            let itemDetails = moreInfo.parentElement;
            if (active){
                if (document.querySelector(`.activeArt`).id === formatName) {
                    moreInfo.classList.toggle('activeArt');
                    moreInfo.style.display = "none";
                    itemDetails.style.paddingBottom = "20px";
                    itemDetails.style.backgroundColor = "#f3a561";
                    itemDetails.style.width = "20%";
                    setButtonText("More Info");
                }
                else {
                active.style.display = "none";
                active.classList.toggle('activeArt');
                active.parentElement.style.paddingBottom = "20px";
                active.parentElement.style.width = "20%";
                active.parentElement.style.backgroundColor = "#f3a561";
                moreInfo.classList.toggle('activeArt');
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
                moreInfo.classList.toggle('activeArt');
                moreInfo.style.display = "block";
                setButtonText("Less Info");
            } 
        }

        
        return(
            <span className="ItemDetails">
                <h2>{name}</h2>
                <img src={image} alt={name} /> <br />
                <div> Has Fake: {falseIcon} {hasFake} </div>
                <button className="moreInfoButton" onClick={showInfo}> {buttonText} </button>
                    <div className="hidden" id={`${formatName}`}>
                        <ul>
                            <li>Buy for: {buyPrice} bells</li>
                            <li>Sell for: {sellPrice} bells</li>
                            <br />
                            <li>{museumDesc}</li>
                        </ul>
                    </div>
            </span>
        )
    }
 
else 
    {return (
        <div className="loading">
            <h2>Currently Loading</h2>
            <img src={loader} alt="loading" />
        </div>)
    }
}