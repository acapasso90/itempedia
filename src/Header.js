import React, {useState} from "react";
import leafIcon from "./media/leaficon.png";
import housewares from "./media/housewares.png";
import housewaresActive from "./media/housewaresActive.png";
import misc from "./media/misc.png";
import activeMisc from "./media/miscActive.png";
import wall from "./media/wall.png";
import activeWall from "./media/wallActive.png";
import art from "./media/art.png";
import activeArt from "./media/artActive.png";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";


export default function Header(){
    const [houseIcon, setHouseIcon] = useState(housewaresActive);
    const [wallIcon, setWallIcon] = useState(wall);
    const [miscIcon, setMiscIcon] = useState(misc);
    const [artIcon, setArtIcon] = useState(art);

    const url = window.location.pathname;

    function artActive(){
        setHouseIcon(housewares);
        setMiscIcon(misc);
        setWallIcon(wall);
        setArtIcon(activeArt);
    }

    function wallActive(){
        setHouseIcon(housewares);
        setArtIcon(art);
        setWallIcon(activeWall);
        setMiscIcon(misc);
    }

    function miscActive(){
        setMiscIcon(activeMisc);
        setHouseIcon(housewares);
        setArtIcon(art);
        setWallIcon(wall)
    }

    function homeActive(){
        setMiscIcon(misc);
        setWallIcon(wall);
        setArtIcon(art);
        setHouseIcon(housewaresActive);
    }

    window.addEventListener('load', 
        function () {
            if ( url === '/wall') {wallActive();}
            else if  (url === '/misc'){miscActive();}
            else if (url === "/art"){artActive();}
        }
    );


    return(
<div className="header">
<header>
                    <div className="row">
                            <div className="bubble">
                                <div className="iconCol">
                                    <NavLink to="/" onClick={homeActive}> <div className="navText">House </div> 
                                    <img src={houseIcon} alt="homewares" className="navIcon" /> </NavLink>
                                </div>
                            </div>
                            <div className="bubble" id="bubble2">
                                <div className="iconCol">
                                    <NavLink to="/wall" onClick={wallActive}> <div className="navText"> Wall </div> 
                                    <img src={wallIcon} alt="wall-mounted" className="navIcon"  /> </NavLink>
                                </div>
                            </div>
                            <div className="bubble"  id="bubble3">
                                <div className="iconCol">
                                    <NavLink to="/misc" onClick={miscActive}> <div className="navText"> Misc </div> 
                                    <img src={miscIcon} alt="misc" className="navIcon"  /> </NavLink>
                                </div>
                            </div>
                            <div className="bubble"  id="bubble4">
                                <div className="iconCol">
                                    <NavLink to="/art" onClick={artActive}> <div className="navText"> Art </div> 
                                    <img src={artIcon} alt="art" className="navIcon" /> </NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <img src={leafIcon} alt="leafIcon" className="leafIcon"/>
                                    <p> Itempedia </p>
                                </div>
                            </div>
                    </div>
                </header>

</div>

    )
}