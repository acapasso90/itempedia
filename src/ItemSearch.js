import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";

export default function ItemSearch(){
    const [loaded, setLoaded] = useState(false);
    const [wallmountedData, setWallmountedData] = useState();
    const [miscData, setMiscData] = useState();
    const [housewareData, setHousewareData] = useState();

    function Loaded(){
        setLoaded(true);
    }

    useEffect(() => {

        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
        axios.get(`http://acnhapi.com/v1/wallmounted/`).then(
            response => {
               setWallmountedData( Object.entries(response.data))}
           );
           axios.get(`http://acnhapi.com/v1/misc`).then(
               response => {setMiscData(Object.entries(response.data))}
           )
           axios.get(`http://acnhapi.com/v1/houseware`).then(
               response => { setHousewareData(Object.entries(response.data))}
           )
           Loaded()
      }
    }, [])


    if (miscData && housewareData && wallmountedData) 
        {return(
            <div className="itemSearch">
                <h1>Housewares</h1>
                {housewareData.slice(0, housewareData.length).map(
                        function(item, index){
                            const name = item[0].replace(/_/g, " ");
                        return(<Items data={item} name={name} key={`houseware${index}`} /> )}
                    )}
                        <h1>Wall Mounted Items</h1>
                    {wallmountedData.slice(0, wallmountedData.length).map(
                        function(item, index){
                            const name = item[0].replace(/_/g, " ");
                        return(<Items data={item} name={name} key={`wall${index}`}  />  )}
                    )}

                              <h1>Misc Items</h1>
                {miscData.slice(0, miscData.length).map(
                        function(item, index){
                            const name = item[0].replace(/_/g, " ");
                        return(<Items data={item} name={name} key={index} /> )}
                    )}
                  
             </div>
        )}
    
    else 
        {return "currently loading"}
}