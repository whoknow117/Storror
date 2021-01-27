import React, {useState}  from 'react';
import classes from './GoodsPropositions.module.scss';
import {NavLink} from "react-router-dom";
import Rating from "../../common/Rating/Rating";
import {GoodsType, ValuesType} from "../../../App";
import Basket from "../../../assets/Basket/Basket";




type GoodsPropositionsPropsType = {
    onClick:(value: ValuesType) => void
    value: ValuesType
    goods: Array<GoodsType>
}


const GoodsPropositions: React.FC<GoodsPropositionsPropsType> = ({onClick, value,goods}) => {



    return <div data-aos="fade-left" className={classes.list}>

        <div className={classes.goodsPropositions}>



            {goods.map(g => {

               if (g) {
                   return <div   className={classes.goodsItem}>
                       <div className={classes.wrap}>
                          <div className={classes.separate}>
                              {g.new  ? <span className={classes.stickerNew}>Новинка</span> : ""}
                              {g.sale  ? <span className={classes.stickerSale}>Распродажа</span> : ""}
                              {g.hit  ? <span className={classes.stickerHit}>Хит</span> : ""}
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

                               </div>
                           </NavLink>
                           <div className={classes.bottom}>
                               <span className={classes.price}>{g.price}</span>

                               <button className={classes.btn}><Basket/></button>
                           </div>

                       </div>
                   </div>
                }
               else return

            })}


        </div>

    </div>
}
export default GoodsPropositions;