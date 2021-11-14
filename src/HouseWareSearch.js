import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";


export default function HouseWareSearch(){
    const [housewareData, setHousewareData] = useState();
    const [searchterm, setSearchterm] = useState("");


    useEffect(() => {

        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
           axios.get(`http://acnhapi.com/v1/houseware`).then(
               response => { setHousewareData(Object.entries(response.data))}
           )
      }
    }, [])

    function setSearch(event){
        setSearchterm(event.target.value.toLowerCase());
    }

    if (housewareData) 
        {return(
            <div className="itemSearch">
                <header>
                    <div className="row">
                        <p>Itempedia</p>
                        <div className="col">
                            <NavLink to="/wall"> Wall Mounted </NavLink>
                            <NavLink to="/misc"> Misc </NavLink>
                            <NavLink to="/art"> Art </NavLink>
                        </div>
                    <form>
                            <input type="text" onChange={setSearch} placeholder="Filter by name/theme"></input>
                        </form>
                        </div>
                </header>
                
                <h1>Housewares</h1>
                <div className="grid" >
                    {housewareData.slice(0, housewareData.length).map(
                            function(item, index){
                                const name = item[0].replace(/_/g, " ");
                                const theme = item[1][0][['hha-concept-1']];
                                if (theme){
                                console.log(theme.includes(searchterm))}
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