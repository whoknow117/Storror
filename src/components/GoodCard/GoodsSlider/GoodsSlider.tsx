import React from 'react';
import classes from './GoodsSlider.module.scss';

export type GoodsSliderType = {}


const GoodsSlider: React.FC<GoodsSliderType> = () => {
    return <div className={classes.wrap}>
        <div className={classes.goodImage}>
            <img src="https://s1.kaercher-media.com/products/11801500/main/1/d0.jpg" alt="#"/>
        </div>
        <div className={classes.goodItems}></div>
    </div>


}

export default GoodsSlider;