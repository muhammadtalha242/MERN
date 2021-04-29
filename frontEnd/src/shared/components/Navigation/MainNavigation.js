import React, { useState } from "react"
import { Link } from 'react-router-dom'

import MainHeader from "./MainHeader"
import NavLinks from "./NavLinks"
import Backdrop from "../UIElements/Backdrop"
import SideDrawer from './SideDrawer'
import "./MainNavigation.css"

//UPDATED

const MainNavigation = props => {
    const [isDrawerOpen, setDrawerState] = useState(false);

    const openDrawerHandler = () => {
        
        setDrawerState(true);
    }

    const closeDrawerHandler = () => {
        setDrawerState(false);
    }

    return (
        <React.Fragment>
            {isDrawerOpen && (
                <Backdrop onClick={closeDrawerHandler} />
            )}
            {<SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler} className="main-navigation__drawer-nav">
                <NavLinks />
            </SideDrawer>
            }
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to='/'>Your Places </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>)
}
export default MainNavigation