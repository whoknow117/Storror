import React from 'react';
import classes from './SidebarLogo.module.scss';
import Logo from '../../../assets/Logo/Logo';
import {NavLink} from "react-router-dom";

type SidebarLogoType = {
    collapsed: boolean
    setCollapsed: () => void
}

const SidebarLogo:React.FC<SidebarLogoType> = ({collapsed,setCollapsed}) => {

    return (
        <NavLink to={'/Storror'} className={classes.headerLogo}>
            <div onClick={setCollapsed} className={classes.menuBtn}>
                <span className={collapsed ? classes.collapsed : classes.span}></span>
            </div>

            <div className={classes.headerLogo__icon}>

                    <Logo />



            </div>
            <h3 className={classes.headerLogo__text}>НАБЖЕНЕЦ</h3>

        </NavLink>
    )
}

export default SidebarLogo;






