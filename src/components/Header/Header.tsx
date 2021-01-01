import React from 'react';
import classes from './Header.module.scss';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";


export type HeaderPropsType = {
    setCollapse: () => void
    collapsed: boolean
    headerCollapsed: boolean
}

const Header: React.FC<HeaderPropsType> = ({setCollapse,collapsed,headerCollapsed}) => {
    return <header className={classes.header}>
        {!headerCollapsed ?  <HeaderTop headerCollapsed={headerCollapsed} setCollapse={setCollapse} collapsed={collapsed}/> : ""}
        <div className={classes.bottom}>
            <HeaderBottom headerCollapsed={headerCollapsed} setCollapse={setCollapse}/>
        </div>

    </header>
}

export default Header;