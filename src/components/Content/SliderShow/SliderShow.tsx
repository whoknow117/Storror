import React, {useState} from 'react';
import classes from './SliderShow.module.scss';

type SliderShowPropsType = {

}
type ImageStateType = {
    id: number
    img: string
}
const imageState: Array<ImageStateType> = [
    {id: 1, img: 'https://www.minimum-price.ru/upload/iblock/ba5/banner_2_7683.jpg',},
    {id: 2, img: 'https://www.ecosum.ru/wp-content/uploads/ejednevnie-promokody-24-august-2020.jpg',},
    {id: 3, img: 'https://st.overclockers.ru/images/soft/2020/04/10/citi-ulet-sale.jpg',},
]

const SliderShow: React.FC<SliderShowPropsType> = () => {

    return <div className={classes.slideShow}>
        <img src="https://www.minimum-price.ru/upload/iblock/ba5/banner_2_7683.jpg" alt="#"/>
    </div>
}
export default SliderShow;