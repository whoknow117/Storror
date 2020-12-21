import React, {useState} from 'react';
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
import {SidebarType} from "../../redux/store";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import Sale from "../../assets/Sale/Sale";
import Discount from "../../assets/Discount/Discount.";

export type SideBarIconsType = {
    id: string
    icon: JSX.Element
}

const sidebarIcons = [
    {id: '1', icon: <Drill/>},
    {id: '2', icon: <Boiler/>},
    {id: '3', icon: <Electric/>},
    {id: '4', icon: <Garden/>},
    {id: '5', icon: <Gas/>},
    {id: '6', icon: <Hose/>},
    {id: '7', icon: <Pump/>},
    {id: '8', icon: <Shovel/>},
    {id: '9', icon: <Ventilation/>},
    {id: '10', icon: <Carts/>},
    {id: '11', icon: <Fasteners/>},
    {id: '12', icon: <Sale/>},
    {id: '13', icon: <Discount/>},
]

// надо сделать так чтоб данные выгружилась корректные

type SidebarPropsType = {
    sidebar: SidebarType
    setCollapsedCallback: () => void
    collapsed: boolean
}

const Sidebar: React.FC<SidebarPropsType> = ({sidebar,setCollapsedCallback,collapsed}) => {

    const [toggle, setToggle] = useState<boolean>(false);

    const activeMenu = () => {
        setToggle(true);
        console.log(toggle)
    }
    const deactivateMenu = () => {
        setToggle(false)
        console.log(toggle)
    }

    return (

        <div className={!collapsed  ? classes.sidebar : classes.collapsed}>
            <SidebarLogo  />
            {/*<span className={classes.toggle}></span>*/}
            {sidebar.map(item => {
                return (

                    <div onMouseLeave={deactivateMenu} onMouseEnter={activeMenu} key={item.id} className={ classes.wrapper }>
                        {sidebarIcons.map(icon => icon.id === item.id ?
                            <div key={icon.id} className={classes.icon}>{icon.icon}</div> : ""
                        )}
                        <div className={classes.name}>{item.name}</div>

                    </div>

                )
            })}<div className={toggle ? classes.toggle : classes.dropDown}>

        </div>

        </div>
    )
}

export default Sidebar;

