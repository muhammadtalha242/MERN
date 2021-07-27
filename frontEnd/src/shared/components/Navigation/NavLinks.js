import React, { useContext } from "react"
import { NavLink } from "react-router-dom";

import { AuthContext } from '../../context/Auth-context'

import "./NavLinks.css"

const NavLinks = props => {

    const auth = useContext(AuthContext)

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn &&
                <li>
                    <NavLink to="/u1/places">Your Places</NavLink>
                </li>}
            {auth.isLoggedIn &&
                <li>
                    <NavLink to="/places/new" exact>New Place</NavLink>
                </li>}
            {!auth.isLoggedIn &&
                <li>
                    <NavLink to="/auth" exact>Authentication</NavLink>
                </li>}
            {auth.isLoggedIn &&
                <li>
                    <button onClick={auth.logout}>Log Out</button>
                </li>}
        </ul>
    )
}

export default NavLinks