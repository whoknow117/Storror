import React from 'react';
import classes from './Content.module.scss';
import SliderShow from "./SliderShow/SliderShow";
import Proposal from "./Proposal/Proposal";
import GoodsPropositions from "./GoodsPropositions/GoodsPropositions";
import {ContentType} from "../../redux/store";
import Popular from "./Popular/Popular";
import GoodsAssembly from "./GoodsAssembly/GoodsAssembly";
import {ValuesType} from "../../App";
import k1 from '../../assets/right.jpg'

type ContentPropsType = {
    setCollapsedCallback: () => void
    collapsed: boolean
    content: ContentType
    onClick: (value: ValuesType) => void
    value: ValuesType
}

const Content: React.FC<ContentPropsType> = ({value,onClick, content,collapsed, setCollapsedCallback}) => {

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
        <div className={classes.goodsTitle}> Специально для Вас</div>
        <GoodsPropositions
            onClick={onClick}
            value={value}
        />

    </div>
}
export default Content;