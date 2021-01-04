import React from 'react';
import classes from './GoodsSlider.module.scss';
import {GoodValuesType} from "../GoodCard";

export type GoodsSliderType = {
    goodValues: GoodValuesType

}


const GoodsSlider: React.FC<GoodsSliderType> = ({goodValues}) => {
    return <div className={classes.wrap}>
        <div className={classes.goodImage}>
            <img src={goodValues.img} alt="#"/>
        </div>
        <div className={classes.goodItems}></div>
    </div>


}

export default GoodsSlider;