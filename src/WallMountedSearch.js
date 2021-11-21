import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";

export default function WallMountedSearch(){
    const [wallmountedData, setWallmountedData] = useState();
    const [searchterm, setSearchterm] = useState("wreath");
    let searchText = null;

    useEffect(() => {
        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
        axios.get(`http://acnhapi.com/v1/wallmounted/`).then(
            response => {
               setWallmountedData( Object.entries(response.data))}
           );
      }
      return function cleanup() {
        mounted = false
        cancelTokenSource.cancel();
    }
    }, [])

    function formSubmit(event){
        event.preventDefault();
        setSearchterm(searchText);
    }

    function setSearch(event){
        searchText = event.target.value.toLowerCase();
    }

    if (wallmountedData) 
        {return(
            <div className="itemSearch">
                <form onSubmit={formSubmit}>
                    <input type="text" onChange={setSearch} placeholder="Filter by name/theme"></input>
                    <button onClick={formSubmit}><i className="fas fa-search"></i></button>
                </form>    
                    <h1>Wall Mounted Items</h1>
                    <h2>Currently showing <span className="searchterm">{searchterm}</span> wallmounted items</h2>
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