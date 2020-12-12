import React, {useState, useEffect} from 'react';
import classes from './SliderShow.module.scss';
import slider1Img from '../../../assets/k1.jpg';
import slider2Img from '../../../assets/k2.jpg';
import slider3Img from '../../../assets/k3.jpg';
import slider4Img from '../../../assets/k4.jpg';
import slider5Img from '../../../assets/k5.jpg';

type SliderShowPropsType = {

}
type ImageStateType = {
    id: number
    img: string
}
const imageState: Array<ImageStateType> = [
    {id: 1, img: slider2Img,},
    {id: 2, img: slider3Img,},
    {id: 3, img: slider4Img,},
]

const SliderShow: React.FC<SliderShowPropsType> = () => {

    const [slide, setSlide] = useState<number>(0)

    const incrementSlide = () => {
         setSlide(slide + 1)

    }
    const addSlide = () => {
        if( slide <= imageState.length - 2 ) {
            incrementSlide()
        }
        else setSlide(0)
        console.log(slide)
    }

    return <div className={classes.slideShow}>
        <img src={imageState[slide].img} alt="#"/>

    </div>
}
export default SliderShow;