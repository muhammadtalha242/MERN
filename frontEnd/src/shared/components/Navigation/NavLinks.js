import React from "react"
import { NavLink } from "react-router-dom";

import "./NavLinks.css"

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">Your Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new" exact>New Place</NavLink>
            </li>
            <li>
                <NavLink to="/auth" exact>Auth</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks