import React from "react";
import leafIcon from "./media/leaficon.png";

import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";


export default function Header(){
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
                        <div className="col">
                            <NavLink to="/"> Housewares </NavLink>
                            <NavLink to="/wall"> Wall Mounted </NavLink>
                            <NavLink to="/misc"> Misc </NavLink>
                            <NavLink to="/art"> Art </NavLink>
                        </div>
                    </div>
                </header>

</div>

    )
}