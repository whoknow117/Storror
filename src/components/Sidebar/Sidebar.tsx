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



{/*<div className={classes.itemWrapper}>*/}
{/*    {state.dropDown[item.id].map(drop => {*/}
{/*        return  <div className={classes.item}>*/}
{/*            <div>{drop.head}</div>*/}
{/*            {drop.items.map( el => {*/}
{/*                return <div>{el.title}</div>*/}
{/*            })}*/}
{/*        </div>*/}
{/*    })}*/}
{/*</div>*/}



// <div className={`${classes.hidden} ${classes.visibleDrop}`}>
//     { item.menu.map( m => {
//
//         return <div  >
//             <h6>{m.title}</h6>
//             {m.items.map(el => <div>{el.title}</div>)}
//         </div>
//
//     })}
// </div>