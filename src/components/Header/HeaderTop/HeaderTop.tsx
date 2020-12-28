import React, {useState} from 'react';
import classes from './HeaderTop.module.scss';
import {NavLink} from "react-router-dom";
import SidebarLogo from "../../Sidebar/SidebarLogo/SidebarLogo";
import SearchIcon from "../../../assets/SearchIcon/SearchIcon";


export type HeaderTopPropsType = {
    setToggle: () => void
    toggle: boolean
}

const HeaderTop: React.FC<HeaderTopPropsType> = ({setToggle, toggle}) => {







    return <div className={classes.top}>
        <button   className={classes.menuBtn}>
            <span className={`${classes.span} ${toggle && classes.toggle}`}></span>
        </button>
        <div className={classes.hiddenSearch}>
            <input type="text" placeholder="Я ищу ..."/>
            <div className={classes.icon}>
                <SearchIcon/>
            </div>
        </div>
        <SidebarLogo/>
        <div className={classes.city}>г.Северодонецк</div>
        <div className={classes.phone}>
            +38(099)-777-77-77
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>Акции</li>
                <li>Организациям</li>
                <li>Контакты</li>
                <li>Магазины</li>
                <li>О нас</li>
            </ul>
        </nav>
    </div>


}

export default HeaderTop;