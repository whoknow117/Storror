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
        <div className={classes.description}>
            <div className={classes.left}>
                {(good.country ? <span className={classes.leftSpan}> Страна </span> : "")}
                {(good.power ? <span className={classes.leftSpan}> Мощность </span> : "")}
                {(good.made ? <span className={classes.leftSpan}> Произведено </span> : "")}
                {(good.country ? <span className={classes.leftSpan}> Страна </span> : "")}
                {(good.country ? <span className={classes.leftSpan}> Страна </span> : "")}
                {(good.country ? <span className={classes.leftSpan}> Страна </span> : "")}
            </div>
            <div className={classes.right}>
                {(good.country ? <span className={classes.rightSpan}>{good.country} </span> : "")}
                {(good.power ? <span className={classes.rightSpan}>{good.power} </span> : "")}
                {(good.made ? <span className={classes.rightSpan}>{good.made} </span> : "")}
                {(good.country ? <span className={classes.rightSpan}>{good.country} </span> : "")}
                {(good.country ? <span className={classes.rightSpan}>{good.country} </span> : "")}
            </div>
        </div>
    </div>




}

export default MainChar;