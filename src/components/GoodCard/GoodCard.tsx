import React from 'react';
import classes from './GoodCard.module.scss';
import MainInformation from "./MainInformation/MainInformation";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import {ValuesType} from "../../App";
import GoodsSlider from "./GoodsSlider/GoodsSlider";
import {Footer} from "../Footer/Footer";


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

const GoodCard:React.FC<GoodCardPropsType> = ({images,onClick,value, id,title,
                                                  price,img,
                                                  group,made,path}) => {


    const values:GoodValuesType = {
        images,id,title,price,img,made,path
    }

    return  <div>
        <div className={classes.goodCard}>

            <GoodsSlider images={images} img={img}/>
            <MainInformation goodValues={values} onClick={onClick} value={value}/>

        </div>
        <div>
            <Footer/>
        </div>
    </div>




}

export default GoodCard;