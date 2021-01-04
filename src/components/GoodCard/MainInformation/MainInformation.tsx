import React from 'react';
import classes from './MainInformation.module.scss';
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import InformationBoard from "./InformationBoard/InformationBoard";
import GoodCardTitle from "./GoodCardTitle/GoodCardTitle";

import {ValuesType} from "../../../App";
import {GoodValuesType} from "../GoodCard";
import BasketWithPlusIcon from "../../../assets/BasketWithPlusIcon/BasketWithPlusIcon";

export type MainInformationType = {
    onClick: (value: ValuesType) => void
    value: ValuesType
    goodValues: GoodValuesType
}


const MainInformation: React.FC<MainInformationType> = ({goodValues,onClick, value}) => {
    return <div className={classes.wrap}>
        <BreadCrumbs/>

        <InformationBoard onClick={onClick} value={value}/>
        <GoodCardTitle title={goodValues.title}/>
        <span className={classes.price}>{goodValues.price}</span>
        <button className={classes.btn}><span className={classes.basket}><BasketWithPlusIcon/></span>В Корзину</button>

    </div>


}

export default MainInformation;