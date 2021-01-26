import React, {useEffect, useState} from 'react';
import classes from './SidebarItem.module.scss'
import {DropDownMenuType, SidebarItemType} from "../../../types/types";
import Drill from "../../../assets/Drill/Drill";
import Boiler from "../../../assets/Boiler/Boiler";
import Electric from "../../../assets/Electric/Electric";
import Garden from "../../../assets/Garden/Garden";
import Gas from "../../../assets/Gas/Gas";
import Hose from "../../../assets/Hose/Hose";
import Pump from "../../../assets/Pump/Pump";
import Shovel from "../../../assets/Shovel/Shovel";
import Ventilation from "../../../assets/Ventilation/Ventilation";
import Carts from "../../../assets/Carts/Carts";
import Fasteners from "../../../assets/Fasteners/Fasteners";
import Sale from "../../../assets/Sale/Sale";
import Discount from "../../../assets/Discount/Discount.";
import SearchIcon from "../../../assets/SearchIcon/SearchIcon";
import DropBar from "./DropBar/DropBar";


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


type SidebarItemPropsType = {
    drop:  DropDownMenuType[]
    navID: string
    item: SidebarItemType
    setCollapsed: () => void

}

const SidebarItem: React.FC<SidebarItemPropsType> = ({setCollapsed,drop,navID, item} ) => {


    const [mode, setMode] = useState<boolean>(false);


    const setOn = () => {setMode(true)}
    const setOff = () => {setMode(false)}

    const collapsed = () => {
        setCollapsed()
        setOff()
    }


    return <div onMouseEnter={setOn} onMouseLeave={setOff} className={classes.itemWrapper}>
         <div onClick={collapsed} className={`${classes.modal} ${mode ? classes.visibleModal : ""}`}></div>
        <div className={classes.separate}>
            <div className={classes.icon}>{sidebarIcons.map(el => el.id === navID ? el.icon : "")}</div>
            <div className={`${classes.title} ${mode ? classes.active : ""}`}>{item.name}  {mode ? <span className={classes.span}></span> : ""}</div>

        </div>
        <div className={`${ classes.hidden} ${mode ? classes.visible : ""}`}>
            <div className={classes.search}>
                <input type="text" placeholder={"Напишите, что хотите найти "}/>
                <button className={classes.searchBtn}>
                    <SearchIcon/>
                </button>

            </div>

                <h5 className={classes.groupName}>{item.name}</h5>
                <div className={classes.scrollBlock}>
                    {drop.map((el,idx) => {
                        return <DropBar
                            item={el}
                            key={idx}
                            mode={mode}

                        />
                    })}
                </div>
        </div>
    </div>



}

export default SidebarItem;