import React from 'react';
import classes from './GoodCard.module.scss';


export type GoodCardPropsType = {
    id: string
    title: string
    price: string
    img: string
    group: string
    made: string
    path: string
}

const GoodCard:React.FC<GoodCardPropsType> = ({id,title,
                                                  price,img,
                                                  group,made,path}) => {
    return  <div className={classes.goodCard}>
        <img src={img} alt=""/>
    </div>




}

export default GoodCard;