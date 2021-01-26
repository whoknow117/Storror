import React, {HTMLAttributes, RefObject, useState} from 'react';
import classes from './Sidebar.module.scss';
import {RootStateType, SidebarType} from "../../redux/store";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import SidebarItem from "./SidebarItem/SidebarItem";




type SidebarPropsType = {
    sidebar: SidebarType
    setCollapsedCallback: () => void
    collapsed: boolean
    state: RootStateType

}

const Sidebar: React.FC<SidebarPropsType> = ({ state,sidebar,setCollapsedCallback,collapsed}) => {











    return (

        <div className={`${classes.sidebar} ${collapsed ? classes.sidebarCollapsed : ""}`}>
            <div className={classes.logo}>
                <SidebarLogo/>
            </div>
            <span onClick={setCollapsedCallback} className={classes.span}></span>
            <h4 className={classes.title}>Каталог</h4>
            {sidebar.map(el => {

                let drop = state.dropDown[el.id];

                return (
                    <SidebarItem

                        setCollapsed={setCollapsedCallback}
                        key={el.id}
                        navID={el.id}
                        item={el}
                        drop={drop}


                    />
                )
            })}


        </div>

    )

}

export default Sidebar;



