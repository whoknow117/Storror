import React from 'react';
import classes from './Content.module.scss';
import SliderShow from "./SliderShow/SliderShow";
import Proposal from "./Proposal/Proposal";
import GoodsPropositions from "./GoodsPropositions/GoodsPropositions";
import {ContentType} from "../../redux/store";
import Popular from "./Popular/Popular";
import GoodsAssembly from "./GoodsAssembly/GoodsAssembly";
import {GoodsType, ValuesType} from "../../App";
import k1 from '../../assets/right.jpg'

type ContentPropsType = {
    setCollapsedCallback: () => void
    collapsed: boolean
    content: ContentType
    onClick: (value: ValuesType) => void
    value: ValuesType
    goods:Array<GoodsType>
    goods2:Array<GoodsType>
    goods3:Array<GoodsType>
}

const Content: React.FC<ContentPropsType> = ({value,onClick, content,collapsed, setCollapsedCallback, goods2,goods3,goods}) => {

    return <div className={classes.content}>
        <div className={classes.slider}>
            <SliderShow/>
            <div className={classes.propositions}>
                <img src={k1} alt=""/>
            </div>
        </div>

        <Proposal/>
        <Popular
            popular={content.popular}
        />
        <GoodsAssembly/>
       <div className={classes.goodsWrap}>
           <div className={classes.goodsTitle}>
               <h3>Специально для Вас</h3>
           </div>
           <GoodsPropositions
               onClick={onClick}
               value={value}
               goods={goods}

           />
       </div>
        <div className={classes.goodsWrap}>
            <div className={classes.goodsTitle}>
                <h3>Лучшие новинки</h3>
            </div>
            <GoodsPropositions
                onClick={onClick}
                value={value}
                goods={goods2}
            />
        </div>
        <div className={classes.goodsWrap}>
            <div className={classes.goodsTitle}>
                <h3> Успей купить</h3>
            </div>
            <GoodsPropositions
                onClick={onClick}
                value={value}
                goods={goods3}
            />
        </div>

    </div>
}
export default Content;