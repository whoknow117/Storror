import React from 'react';
import classes from './GoodCard.module.scss';
import MainInformation from "./MainInformation/MainInformation";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import {ValuesType} from "../../App";
import GoodsSlider from "./GoodsSlider/GoodsSlider";


export type GoodCardPropsType = {
    id: string
    title: string
    price: string
    img: string
    group: string
    made: string
    path: string
    onClick: (value: ValuesType) => void
    value: ValuesType
}

const GoodCard:React.FC<GoodCardPropsType> = ({onClick,value, id,title,
                                                  price,img,
                                                  group,made,path}) => {
    return  <div className={classes.goodCard}>

        <GoodsSlider/>
        {/*<MainInformation onClick={onClick} value={value}/>*/}
    </div>




}

export default GoodCard;