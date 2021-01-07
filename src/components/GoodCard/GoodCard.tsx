import React from 'react';
import classes from './GoodCard.module.scss';
import MainInformation from "./MainInformation/MainInformation";
import {GoodsType, ValuesType} from "../../App";
import GoodsSlider from "./GoodsSlider/GoodsSlider";
import {Footer} from "../Footer/Footer";
import RowNavMenu from "./RowNavMenu/RowNavMenu";
import MainСharacteristics from "./MainСharacteristics/MainСharacteristics";


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
    images: Array<string>
    good: GoodsType
}

export type GoodValuesType = {
    id: string
    title: string
    price: string
    img: string
    made: string
    path: string
    images: Array<string>


}

const GoodCard:React.FC<GoodCardPropsType> = ({good,images,onClick,value, id,title,
                                                  price,img,
                                                  group,made,path}) => {


    const values:GoodValuesType = {
        images,id,title,price,img,made,path
    }

    return  <div className={classes.goodCard}>
        <div className={classes.goodCardMain}>

            <GoodsSlider images={images} img={img}/>
            <MainInformation goodValues={values} onClick={onClick} value={value}/>

        </div>
        <RowNavMenu/>
        <MainСharacteristics good={good} />
        <div>
            <Footer/>
        </div>
    </div>




}

export default GoodCard;