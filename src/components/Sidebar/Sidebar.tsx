import React, {HTMLAttributes, RefObject, useState} from 'react';
import classes from './Sidebar.module.scss';
import {NavLink} from "react-router-dom";
import Boiler from "../../assets/Boiler/Boiler";
import Electric from "../../assets/Electric/Electric";
import Garden from "../../assets/Garden/Garden";
import Gas from "../../assets/Gas/Gas";
import Hose from "../../assets/Hose/Hose";
import Pump from "../../assets/Pump/Pump";
import Shovel from "../../assets/Shovel/Shovel";
import Ventilation from "../../assets/Ventilation/Ventilation";
import Carts from "../../assets/Carts/Carts";
import Drill from "../../assets/Drill/Drill";
import Fasteners from "../../assets/Fasteners/Fasteners";
import {RootStateType, SidebarType} from "../../redux/store";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import Sale from "../../assets/Sale/Sale";
import Discount from "../../assets/Discount/Discount.";
import {spawn} from "child_process";
import SidebarItem from "./SidebarItem/SidebarItem";



// надо сделать так чтоб данные выгружилась корректные

type SidebarPropsType = {
    sidebar: SidebarType
    setCollapsedCallback: () => void
    collapsed: boolean
    state: RootStateType

}

const Sidebar: React.FC<SidebarPropsType> = ({ state,sidebar,setCollapsedCallback,collapsed}) => {











    return (

        <div className={classes.sidebar}>
            <div className={classes.logo}>
                LOGO
            </div>
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