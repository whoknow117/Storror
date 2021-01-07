import React from 'react';
import classes from './SimilarProducts.module.scss';
import {GoodsType} from "../../../App";
import Rating from "../../common/Rating/Rating";
import {NavLink} from "react-router-dom";
import Basket from "../../../assets/Basket/Basket";

export type SimilarProductsType = {
    currGood:  GoodsType
    category?: string
}


const SimilarProducts:React.FC<SimilarProductsType> = ({category,currGood}) => {
    return  <div className={classes.wrapper}>


                 <div className={classes.goodsItem}>
                    <div className={classes.wrap}>

                        <NavLink to={currGood.path}>
                            <div className={classes.image}>
                                <img src={currGood.img} alt="#"/>

                            </div>
                            <div className={classes.spanWrap}>
                                <span className={classes.spanTitle}>{currGood.title}</span>

                            </div>
                        </NavLink>
                        <div className={classes.bottom}>
                            <span className={classes.price}>{currGood.price}</span>

                            <button className={classes.btn}><Basket/></button>
                        </div>

                    </div>
                </div>




    </div>

}

export default SimilarProducts;