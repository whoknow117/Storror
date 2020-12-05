import React from 'react';
import classes from './Header.module.scss';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
    return <header className={classes.header}>
       <HeaderTop/>
        <div className={classes.bottom}>
            <HeaderBottom/>
        </div>

    </header>
}

export default Header;