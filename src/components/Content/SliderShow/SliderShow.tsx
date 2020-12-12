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
    {id: 0, img: slider2Img,},
    {id: 1, img: slider3Img,},
    {id: 2, img: slider4Img,},
]

const SliderShow: React.FC<SliderShowPropsType> = () => {


 const [slide, setSlide] = useState<number>(0);

 const incrementSlide = () => {
     if(slide ===  imageState.length - 1) {

         setSlide(0)
     }
     else setSlide(slide + 1)
 }

 const decrementSlide = () => {
     if(slide) {
         setSlide(slide - 1);
     }
     else setSlide(imageState.length - 1)
 }



    return <div className={classes.slideShow}>
         <div className={`${classes.sliderImage}${slide === imageState[slide].id ? classes.active : ''} `}>
             <img src={imageState[slide].img} alt=""/>
         </div>
            <button onClick={incrementSlide}>prev</button>
            <button onClick={decrementSlide}>next</button>


    </div>
}
export default SliderShow;