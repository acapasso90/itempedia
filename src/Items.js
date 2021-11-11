import React from "react";
import Details from "./Details.js";

export default function Items(props){

    const details = props.data[1];
    if (details) 
    {return( <div className="Items">
{details.slice(0, details.length).map(
        function(detail, index){
            let indexs = props.keys;
            return(
                <div className="ItemDetails" key={`misc details ${index}`}>
                    <h2>{props.name}</h2>
                    <Details data={detail} name={props.name} /> 
                </div>
                )
        }
        
    )}

    </div> )}
else 
    {return "currently loading"}
}