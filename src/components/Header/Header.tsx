import React from 'react';
import classes from './Header.module.scss';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";


export type HeaderPropsType = {
    setCollapse: () => void
    collapsed: boolean
}

const Header: React.FC<HeaderPropsType> = ({setCollapse,collapsed}) => {
    return <header className={classes.header}>
       <HeaderTop setCollapse={setCollapse} collapsed={collapsed}/>
        <div className={classes.bottom}>
            <HeaderBottom setCollapse={setCollapse}/>
        </div>

    </header>
}

export default Header;