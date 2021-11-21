import React, {useState} from "react";
import leafIcon from "./media/leaficon.png";
import housewares from "./media/housewares.png";
import housewaresActive from "./media/housewaresActive.png";
import misc from "./media/misc.png";
import activeMisc from "./media/miscActive.png";
import wall from "./media/wall.png";
import activeWall from "./media/wallActive.png";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";


export default function Header(){
    const [houseIcon, setHouseIcon] = useState(housewaresActive);
    const [wallIcon, setWallIcon] = useState(wall);
    const [miscIcon, setMiscIcon] = useState(misc);

    const url = window.location.pathname;

    function wallActive(){
        setHouseIcon(housewares);
        setWallIcon(activeWall);
        setMiscIcon(misc);
    }

    function miscActive(){
        setMiscIcon(activeMisc);
        setHouseIcon(housewares);
        setWallIcon(wall)
    }

    function homeActive(){
        setMiscIcon(misc);
        setWallIcon(wall);
        setHouseIcon(housewaresActive);
    }

    window.addEventListener('load', function () {
        if ( url === '/wall')
        {wallActive()}
// on load if url is on /deepsea runs bugLinkActive function to set the deep sea icon to "active"
else if  (url === '/misc'){miscActive()}
    });


    return(
<div className="header">
<header>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img src={leafIcon} alt="leafIcon" className="leafIcon"/>
                                <p>Itempedia</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="iconCol">
                                <NavLink to="/" onClick={homeActive}> Housewares </NavLink>
                                <img src={houseIcon} alt="homewares" className="navIcon" />
                            </div>
                            <div className="iconCol">
                                <NavLink to="/wall" onClick={wallActive}> Wall Mounted </NavLink>
                                <img src={wallIcon} alt="wall-mounted" className="navIcon"  />
                            </div>
                            <div className="iconCol">
                                <NavLink to="/misc" onClick={miscActive}> Misc </NavLink>
                                <img src={miscIcon} alt="misc" className="navIcon"  />
                            </div>
                            <div className="iconCol">
                                <NavLink to="/art"> Art </NavLink>
                            </div>
                        </div>
                    </div>
                </header>

</div>

    )
}