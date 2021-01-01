import React, {useState}  from 'react';
import classes from './GoodsPropositions.module.scss';
import {NavLink} from "react-router-dom";
import Rating from "../../common/Rating/Rating";
import {GoodsType, ValuesType} from "../../../App";



type GoodsPropositionsPropsType = {
    onClick:(value: ValuesType) => void
    value: ValuesType
    goods: Array<GoodsType>
}


const GoodsPropositions: React.FC<GoodsPropositionsPropsType> = ({onClick, value,goods}) => {



    return <div className={classes.list}>

        <div className={classes.goodsPropositions}>


            {goods.map(g => {

               if (g.id <= '5') {
                   return <div   className={classes.goodsItem}>
                       <div className={classes.wrap}>
                          <div className={classes.separate}>
                              {g.new === true ? <span className={classes.stickerNew}>Новинка</span> : ""}
                              {g.sale === true ? <span className={classes.stickerSale}>Распродажа</span> : ""}
                              {g.hit === true ? <span className={classes.stickerHit}>Хит</span> : ""}
                              <div className={classes.rating}>
                                  <Rating value={value} onClick={onClick}/>
                              </div>
                          </div>
                           <NavLink to={g.path}>
                               <div className={classes.image}>
                                   <img src={g.img} alt="#"/>

                               </div>
                               <div className={classes.spanWrap}>
                                   <span className={classes.spanTitle}>{g.title}</span>
                                   <span className={classes.price}>{g.price}</span>
                               </div>
                           </NavLink>


                           <button className={classes.btn}>купить</button>

                       </div>
                   </div>
                }

            })}


        </div>
    </div>
}
export default GoodsPropositions;