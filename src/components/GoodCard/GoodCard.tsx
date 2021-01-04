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

export type GoodValuesType = {
    id: string
    title: string
    price: string
    img: string
    made: string
    path: string

}

const GoodCard:React.FC<GoodCardPropsType> = ({onClick,value, id,title,
                                                  price,img,
                                                  group,made,path}) => {


    const values:GoodValuesType = {
        id,title,price,img,made,path
    }

    return  <div className={classes.goodCard}>

        <GoodsSlider goodValues={values}/>
        <MainInformation goodValues={values} onClick={onClick} value={value}/>
    </div>




}

export default GoodCard;