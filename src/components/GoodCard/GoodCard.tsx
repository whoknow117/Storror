import React from 'react';
import classes from './GoodCard.module.scss';
import MainInformation from "./MainInformation/MainInformation";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import {ValuesType} from "../../App";


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
        <MainInformation onClick={onClick} value={value}/>
        <AdditionalInformation/>
    </div>




}

export default GoodCard;