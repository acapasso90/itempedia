import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";

export default function WallMountedSearch(){
    const [wallmountedData, setWallmountedData] = useState();
    const [searchterm, setSearchterm] = useState("");

    useEffect(() => {

        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
        axios.get(`http://acnhapi.com/v1/wallmounted/`).then(
            response => {
               setWallmountedData( Object.entries(response.data))}
           );
      }
    }, [])

    function setSearch(event){
        setSearchterm(event.target.value.toLowerCase());
    }

    if (wallmountedData) 
        {return(
            <div className="itemSearch">
                <header>
                    <div className="row">
                        <div className="col">
                            <p>Itempedia</p>
                        </div>
                        <div className="col">
                            <NavLink to="/"> Housewares </NavLink>
                            <NavLink to="/misc"> Misc </NavLink>
                            <NavLink to="/art"> Art </NavLink>
                        </div>
                        <div className="col">
                            <form>
                                <input type="text" onChange={setSearch} placeholder="Filter by name/theme"></input>
                            </form>
                        </div>
                    </div>
                </header>
                
             
                        <h1>Wall Mounted Items</h1>
                        <div className="grid" >
                        {wallmountedData.slice(0, wallmountedData.length).map(
                            function(item, index){
                                const name = item[0].replace(/_/g, " ");
                                const theme = item[1][0][['hha-concept-1']];
                                const theme2 = item[1][0][['hha-concept-2']];
                                // if theme exists and includes searchterm display item info
                                    if (theme){
                                        if (theme.includes(searchterm)){
                                            return(
                                                <Items data={item} name={name} key={`houseware${index}`} /> 
                                            )
                                        }
                                // if theme2 exists and includes searchterm display item info
                                        if (theme2){
                                            if (theme2.includes(searchterm)){ return(
                                                <Items data={item} name={name} key={`houseware${index}`} /> 
                                            )}
                                        }
                                    }
                                // if item name includes searchterm display item info
                                    if (name.includes(searchterm)){
                                        return(
                                            <Items data={item} name={name} key={`houseware${index}`} /> 
                                        )}
                                    else {return null;}
                                }  
                            )
                        }
                </div>

             </div>
        )}
    
    else 
        {return "currently loading"}
}