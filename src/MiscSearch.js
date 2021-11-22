import axios from "axios";
import React, {useState, useEffect} from "react";
import Items from "./Items.js";
import loader from "./media/loader.gif";


export default function MiscSearch(){
    const [miscData, setMiscData] = useState();
    const [searchterm, setSearchterm] = useState("cake");
    let searchText = null;

    useEffect(() => {
        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
           axios.get(`https://acnhapi.com/v1/misc`).then(
               response => {setMiscData(Object.entries(response.data))}
           )
      }
      return function cleanup() {
        mounted = false
        cancelTokenSource.cancel();
    }
    }, [])

    function formSubmit(event){
        event.preventDefault();
        if (searchText){
        setSearchterm(searchText)}
    }

    function setSearch(event){
        searchText = event.target.value.toLowerCase();
    }

    if (miscData) 
        {return(
            <div className="itemSearch">
                <form onSubmit={formSubmit}>
                    <input type="text" onChange={setSearch} placeholder="Filter by name/theme"></input>
                    <button onClick={formSubmit}><i className="fas fa-search"></i></button>
                </form>    
                <h1>Misc Items</h1>
                <h2>Currently showing <span className="searchterm">{searchterm}</span> items</h2>
                <div className="grid" >
                {miscData.slice(0, miscData.length).map(
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
    {return (
        <div className="loading">
            <h2>Currently Loading</h2>
            <img src={loader} alt="loading" />
        </div>)
    }
}