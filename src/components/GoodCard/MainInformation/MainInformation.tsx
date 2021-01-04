import React from 'react';
import classes from './MainInformation.module.scss';
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import InformationBoard from "./InformationBoard/InformationBoard";
import GoodCardTitle from "./GoodCardTitle/GoodCardTitle";

import {ValuesType} from "../../../App";
import {GoodValuesType} from "../GoodCard";
import BasketWithPlusIcon from "../../../assets/BasketWithPlusIcon/BasketWithPlusIcon";
import BookMark from "../../../assets/Bookmark/BookMark";
import Delivery from "../../../assets/Delivery/Delivery";

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
        <div className={classes.btns}>
            <button className={classes.btn}><span className={classes.basket}><BasketWithPlusIcon/></span>В Корзину</button>
            <button title="Добавить в избранное" className={classes.bookMark}><BookMark/></button>
        </div>
        <div className={classes.logistic}>
            <div className={classes.delivery}>
                <div className={classes.icon}><Delivery/></div>
                <span className={classes.spanDelivery}>Доставка</span> завтра, 5 января, от 100 грн.
            </div>
            <div className={`${classes.delivery} ${classes.pickup}`}>

                <span className={classes.spanDelivery}>Самовывоз</span> завтра,с 8:00 до 18:00
            </div>
        </div>

    </div>


}

export default MainInformation;