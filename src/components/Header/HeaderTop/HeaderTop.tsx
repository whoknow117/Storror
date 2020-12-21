import React, {useState} from 'react';
import classes from './HeaderTop.module.scss';
import {NavLink} from "react-router-dom";

const HeaderTop = () => {


    const [toggle, setToggle] = useState<boolean>(false);




    return <div className={classes.top}>
        <NavLink to={'/Storror'} onClick={() => {setToggle(!toggle)}} className={classes.menuBtn}>
            <span className={`${classes.span} ${toggle && classes.toggle}`}></span>
        </NavLink>
        <div className={classes.phone}>
            +38(099)-777-77-77
        </div>
        <div className={classes.city}>г.Северодонецк</div>
        <nav className={classes.nav}>
            <ul>
                <li>Акции</li>
                <li>Организациям</li>
                <li>Контакты</li>
                <li>О нас</li>
            </ul>
        </nav>
    </div>


}

export default HeaderTop;