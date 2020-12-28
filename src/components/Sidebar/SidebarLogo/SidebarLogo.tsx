import React from 'react';
import classes from './SidebarLogo.module.scss';
import Logo from '../../../assets/Logo/Logo';
import {NavLink} from "react-router-dom";

type SidebarLogoType = {

}

const SidebarLogo:React.FC<SidebarLogoType> = ( ) => {

    return (
        <NavLink to={'/Storror'} className={classes.headerLogo}>


            <div className={classes.headerLogo__icon}>

                    <Logo />
                    <div className={classes.image}>
                        <img src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-2714ff4d6b03b0c764b5df452bf906cb.png" alt="#"/>
                    </div>


            </div>
            <h3 className={classes.headerLogo__text}>НАБЖ  <span className={classes.eSpan}>   </span>  НЕЦ</h3>

        </NavLink>
    )
}

export default SidebarLogo;






