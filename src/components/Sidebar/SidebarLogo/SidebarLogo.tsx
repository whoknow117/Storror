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
            {/*<div onClick={setCollapsed} className={classes.menuBtn}>*/}
            {/*    <span className={collapsed ? classes.collapsed : classes.span}></span>*/}
            {/*</div>*/}

            <div className={classes.headerLogo__icon}>

                    <Logo />
                    <div className={classes.image}>
                        <img src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-2714ff4d6b03b0c764b5df452bf906cb.png" alt="#"/>
                    </div>


            </div>
            <h3 className={classes.headerLogo__text}>НАБЖЕНЕЦ</h3>

        </NavLink>
    )
}

export default SidebarLogo;






