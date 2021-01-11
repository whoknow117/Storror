import React from 'react';
import classes from './Content.module.scss';
import SliderShow from "./SliderShow/SliderShow";
import GoodsPropositions from "./GoodsPropositions/GoodsPropositions";
import {ContentType} from "../../redux/store";
import Popular from "./Popular/Popular";
import GoodsAssembly from "./GoodsAssembly/GoodsAssembly";
import {GoodsType, ValuesType} from "../../App";
import k1 from '../../assets/right.jpg'
import {Footer} from "../Footer/Footer";

type ContentPropsType = {
    setCollapsedCallback: () => void
    collapsed: boolean
    content: ContentType
    onClick: (value: ValuesType) => void
    value: ValuesType
    goods:Array<GoodsType>

}

const Content: React.FC<ContentPropsType> = ({value,onClick, content,
                                                 collapsed, setCollapsedCallback,
                                             goods}) => {

    const goodsSales = (goods:Array<GoodsType>):Array<GoodsType> => {

        return goods.filter( (g, idx) => g.sale ).filter( (good, idx) => idx < 5 ? good : "")
    }
    const goodSalesCallback = goodsSales(goods)

    const goodsHit = (goods:Array<GoodsType>): Array<GoodsType> => {
        let filterGoods = goods.filter( (g, idx) => g.hit)
        return filterGoods.filter( (el, idx) => idx < 5 ? el : "")
    }
    const goodHitCallback = goodsHit(goods)

    const goodsNew = (goods:Array<GoodsType>): Array<GoodsType> => {
        return goods.filter( (g, idx) => idx < 5 ? g : "")
    }
    const goodNewCallback = goodsNew(goods)


    return <div className={classes.content}>
        <div className={classes.slider}>
            <SliderShow/>
            <div className={classes.propositions}>
                <img src={k1} alt=""/>
            </div>
        </div>


        <Popular
            popular={content.popular}
        />
        <GoodsAssembly/>
        <div className={classes.goodsWrap}>
            <div className={classes.goodsTitle}>
                <h3>Новинки</h3>
            </div>
            <GoodsPropositions
                onClick={onClick}
                value={value}
                goods={goodNewCallback}

            />
        </div>
       <div className={classes.goodsWrap}>
           <div className={classes.goodsTitle}>
               <h3>Специально для Вас</h3>
           </div>
           <GoodsPropositions
               onClick={onClick}
               value={value}
               goods={goodSalesCallback}

           />
       </div>
        <div className={classes.goodsWrap}>
            <div className={classes.goodsTitle}>
                <h3>Успей купить</h3>
            </div>
            <GoodsPropositions
                onClick={onClick}
                value={value}
                goods={goodHitCallback}

            />
        </div>



        <Footer/>
    </div>
}
export default Content;