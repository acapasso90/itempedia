import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";


export default function HouseWareSearch(){
    const [loaded, setLoaded] = useState(false);
    const [housewareData, setHousewareData] = useState();
    const [searchterm, setSearchterm] = useState("");

    function Loaded(){
        setLoaded(true);
    }

    useEffect(() => {

        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
           axios.get(`http://acnhapi.com/v1/houseware`).then(
               response => { setHousewareData(Object.entries(response.data))}
           )
           Loaded()
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
                        </div>
                    <form>
                            <input type="text" onChange={setSearch} placeholder="Filter by name/color"></input>
                        </form>
                        </div>
                </header>
                
                <h1>Housewares</h1>
                <div className="grid" >
                    {housewareData.slice(0, housewareData.length).map(
                            function(item, index){
                                const name = item[0].replace(/_/g, " ");
                                const color = item[1].slice(0, item[1].length).map(function(item, index){return(item[`color-1`])});
                                    if (name.includes(searchterm)|| color.includes(searchterm)){
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