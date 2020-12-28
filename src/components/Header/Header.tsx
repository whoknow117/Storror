import React from 'react';
import classes from './Header.module.scss';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";


export type HeaderPropsType = {
    setToggle: () => void
    toggle: boolean
}

const Header: React.FC<HeaderPropsType> = ({setToggle,toggle}) => {
    return <header className={classes.header}>
       <HeaderTop setToggle={setToggle} toggle={toggle}/>
        <div className={classes.bottom}>
            <HeaderBottom/>
        </div>

    </header>
}

export default Header;