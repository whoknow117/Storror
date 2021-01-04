import React, {useState} from 'react';
import classes from './GoodsSlider.module.scss';
import {GoodValuesType} from "../GoodCard";
import ArrowLeft from "../../../assets/ArrowLeftIcon/ArrowLeftIcon";
import ArrowRight from "../../../assets/ArrowRightIcon/ArrowRightIcon";

export type GoodsSliderType = {
    images: Array<string>
    img: string

}


const GoodsSlider: React.FC<GoodsSliderType> = ({img, images}) => {

    const [imgIdx, setImgIdx] = useState<number>(0);

    const setIdx = (idx:number) => {
        setImgIdx(idx)
    }


    return <div className={classes.wrap}>
        <div className={classes.goodImage}>
            <img src={ images[imgIdx]} alt="#"/>
        </div>
        <div className={classes.goodItems}>

            {images.map((img,idx) =>
                <div key={idx} onClick={()=>
                {setIdx(idx)}} className={`${classes.image}
                 ${idx === imgIdx ? classes.active : ""}`}><img src={img} alt="#"/></div>)}
        </div>
        <div className={classes.itemButtons}>
            <button className={`${classes.btn} ${classes.left}`}><ArrowLeft/></button>
            <button className={`${classes.btn} ${classes.right}`}><ArrowRight/></button>
        </div>


    </div>


}

export default GoodsSlider;