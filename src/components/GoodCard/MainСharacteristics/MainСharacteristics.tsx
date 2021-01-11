import React from 'react';
import classes from './MainСharacteristics.module.scss';
import {GoodsType} from "../../../App";
import LeftSideTitle from "../LeftsideTitle/LeftsideTitle";

export type MainCharType = {
    good: GoodsType
}


const MainChar:React.FC<MainCharType> = ({good} ) => {
    return  <div className={classes.wrap}>
        <LeftSideTitle title={"Основное"}>Все характеристики</LeftSideTitle>
        <div   className={classes.description}>
            <div className={classes.left}>
                {(good.country ? <span className={classes.leftSpan}> Страна </span> : "")}
                {(good.power ? <span className={classes.leftSpan}> Мощность </span> : "")}
                {(good.made ? <span className={classes.leftSpan}> Произведено </span> : "")}
                {(good.material ? <span className={classes.leftSpan}> Материалы </span> : "")}
                {(good.batteryVoltage ? <span className={classes.leftSpan}> Напряжение аккумулятора </span> : "")}
                {(good.cartridgeType ? <span className={classes.leftSpan}> Тип патрона </span> : "")}
                {(good.volume ? <span className={classes.leftSpan}> Объем </span> : "")}
                {(good.color ? <span className={classes.leftSpan}> Цвет </span> : "")}
                {(good.warranty ? <span className={classes.leftSpan}> Гарантия </span> : "")}
                {(good.heatElementType ? <span className={classes.leftSpan}> Нагревательный элемент </span> : "")}
                {(good.install ? <span className={classes.leftSpan}> Установка </span> : "")}
                {(good.installationType ? <span className={classes.leftSpan}>Тип установки </span> : "")}

            </div>
            <div className={classes.right}>
                {(good.country ? <span className={classes.rightSpan}>{good.country} </span> : "")}
                {(good.power ? <span className={classes.rightSpan}>{good.power} </span> : "")}
                {(good.made ? <span className={classes.rightSpan}>{good.made} </span> : "")}
                {(good.material ? <span className={classes.rightSpan}>{good.material} </span> : "")}
                {(good.batteryVoltage ? <span className={classes.rightSpan}>{good.batteryVoltage} </span> : "")}
                {(good.cartridgeType ? <span className={classes.rightSpan}>{good.cartridgeType} </span> : "")}
                {(good.volume ? <span className={classes.rightSpan}>{good.volume} </span> : "")}
                {(good.color ? <span className={classes.rightSpan}>{good.color} </span> : "")}
                {(good.warranty ? <span className={classes.rightSpan}>{good.warranty} </span> : "")}
                {(good.heatElementType ? <span className={classes.rightSpan}>{good.heatElementType} </span> : "")}
                {(good.install ? <span className={classes.rightSpan}>{good.install} </span> : "")}
                {(good.installationType ? <span className={classes.rightSpan}>{good.installationType} </span> : "")}

            </div>
        </div>
    </div>




}

export default MainChar;