import axios from "axios";
import React, {useState, useEffect} from "react";
import Art from "./Art.js";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";


export default function HouseWareSearch(){
    const [loaded, setLoaded] = useState(false);
    const [artData, setArtData] = useState();
    const [searchterm, setSearchterm] = useState("");

    function Loaded(){
        setLoaded(true);
    }

    useEffect(() => {
        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
           axios.get(`http://acnhapi.com/v1/art/`).then(
               response => { setArtData(Object.entries(response.data))}
           )
           Loaded()
      }
    }, [])

    function setSearch(event){
        setSearchterm(event.target.value.toLowerCase());
    }

    if (artData) 
        {return(
            <div className="itemSearch">
                <header>
                    <div className="row">
                        <p>Itempedia</p>
                        <div className="col">
                            <NavLink to="/"> Housewares </NavLink>
                            <NavLink to="/wall"> Wall Mounted </NavLink>
                            <NavLink to="/misc"> Misc </NavLink>
                            
                        </div>
                    <form>
                            <input type="text" onChange={setSearch} placeholder="Filter by name"></input>
                        </form>
                        </div>
                </header>
                
                <h1>Art</h1>
                <div className="grid" >
                    {artData.slice(0, artData.length).map(
                            function(item, index){
                                console.log(item);
                                const name = item[0].replace(/_/g, " ");
                                  if (name.includes(searchterm)){
                                          return(
                                         <Art data={item} name={name} key={`artwork${index}`} /> 
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