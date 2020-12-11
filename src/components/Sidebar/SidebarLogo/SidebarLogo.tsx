import React from 'react';
import classes from './SidebarLogo.module.scss';
import Logo from '../../../assets/Logo/Logo';
import {NavLink} from "react-router-dom";

// import { NavLink } from 'react-router-dom';

const SidebarLogo = () => {

    return (
        <div  className={classes.headerLogo}>

            <div className={classes.headerLogo__icon}>

                    <Logo />



            </div>
            <h3 className={classes.headerLogo__text}>НАБЖЕНЕЦ</h3>
        </div>
    )
}

export default SidebarLogo;






