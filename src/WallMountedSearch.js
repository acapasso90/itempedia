import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";

export default function WallMountedSearch(){
    const [loaded, setLoaded] = useState(false);
    const [wallmountedData, setWallmountedData] = useState();
    const [miscData, setMiscData] = useState();
    const [housewareData, setHousewareData] = useState();
    const [searchterm, setSearchterm] = useState("");

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
           Loaded()
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
                        <p>Itempedia</p>
                        <div className="col">
                        <NavLink to="/"> Housewares </NavLink>
                        <NavLink to="/misc"> Misc </NavLink>
                        <NavLink to="/art"> Art </NavLink>
                    </div>
                        <form>
                            <input type="text" onChange={setSearch} placeholder="Filter by name/color"></input>
                        </form>
                    </div>
                </header>
                
             
                        <h1>Wall Mounted Items</h1>
                        <div className="grid" >
                        {wallmountedData.slice(0, wallmountedData.length).map(
                            function(item, index){
                                const name = item[0].replace(/_/g, " ");
                                const color = item[1].slice(0, item[1].length).map(function(item, index){return(item[`color-1`])});
                                if (name.includes(searchterm)|| color.includes(searchterm)){
                            return(
                                <Items data={item} name={name}  key={`wall${index}`} />  
                            )}
                            else {return null;}
                            })}
                        </div>
                             
             </div>
        )}
    
    else 
        {return "currently loading"}
}