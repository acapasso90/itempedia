import React from "react";
import Details from "./Details.js";

export default function Items(props){

        

    const details = props.data[1];
    if (details) 
    {return( details.slice(0, details.length).map(
        function(detail, index){
            return(
                <span className="ItemDetails"  key={`misc details ${index}`}>
                    <h2>{props.name}</h2>
                    <img src={detail[`image_uri`]} alt={props.name} loading="lazy" /> 
                    <br />
                        <Details data={detail} name={props.name} /> 
                </span>
                )
        }   
    ))
    }
 
else 
    {return "currently loading"}
}