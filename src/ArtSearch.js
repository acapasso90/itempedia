import axios from "axios";
import React, {useState, useEffect} from "react";
import Art from "./Art.js";
import loader from "./media/loader.gif";



export default function HouseWareSearch(){
    const [artData, setArtData] = useState();
    const [searchterm, setSearchterm] = useState("");
    let searchText = null;


    useEffect(() => {
        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
       if (mounted) {
           axios.get(`http://acnhapi.com/v1/art/`).then(
               response => { setArtData(Object.entries(response.data))}
           )
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

    if (artData) 
        {return(
            <div className="itemSearch">
                <form onSubmit={formSubmit}>
                    <input type="text" onChange={setSearch} placeholder="Filter by name"></input>
                    <button onClick={formSubmit}><i className="fas fa-search"></i></button>
                </form>
                <h1>Art</h1>
                <div className="artgrid" >
                    {artData.slice(0, artData.length).map(
                            function(item, index){
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
        {return (
            <div className="loading">
                <h2>Currently Loading</h2>
                <img src={loader} alt="loading" />
            </div>)
        }
}