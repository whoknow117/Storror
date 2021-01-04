import React, {useState, useEffect} from 'react';
import classes from './SliderShow.module.scss';
import slider1Img from '../../../assets/k1.jpg';

import slider3Img from '../../../assets/k3.jpg';
import slider4Img from '../../../assets/k4.jpg';
import slider5Img from '../../../assets/k5.jpg';
import ArrowLeft from "../../../assets/ArrowLeftIcon/ArrowLeftIcon";
import ArrowRight from "../../../assets/ArrowRightIcon/ArrowRightIcon";

type SliderShowPropsType = {}
type ImageStateType = {
    id: number
    img: string
}
const imageState: Array<ImageStateType> = [

    {id: 0, img: slider3Img,},
    {id: 1, img: slider4Img,},
    {id: 2, img: slider1Img,},
    {id: 3, img: slider5Img,},
]

const SliderShow: React.FC<SliderShowPropsType> = () => {


    const [slide, setSlide] = useState<number>(2);


    const incrementSlide = () => {
        if (slide === imageState.length - 1) {

            setSlide(0)

        } else setSlide(slide + 1)
    }


    const decrementSlide = () => {

        if (slide) {
            setSlide(slide - 1);
        } else setSlide(imageState.length - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((current) =>
                current === imageState.length - 1 ? 0 : current + 1
            )


        }, 5000)
        return () => clearInterval();
    }, [])

    const spanStyle = {
        width: `${slide * 25 + '%'}`,
        display: 'block',
        height: '2px',
        background: '#ff7002',
        transition: '.5s ease-in-out',
    }

    return <div className={classes.slideShow}>

        {imageState.map((im, idx) => {
            return (
                <div key={idx} className={idx === slide ? classes.active : classes.slide}>
                    <img src={im.img} alt="#"/>
                </div>
            )
        })}

        <div className={classes.btns}>
            <button className={classes.btn} onClick={decrementSlide}>
                <ArrowLeft/>
            </button>
            <div className={classes.spanWrapper}>
                <span className={classes.span}>{slide}/</span>
                <span className={classes.span}>{imageState.length}</span>
            </div>
            <div className={classes.sliderLength}>
                <span style={spanStyle}></span>
            </div>
            <button className={classes.btn} onClick={incrementSlide}>
                <ArrowRight/>
            </button>
        </div>


    </div>
}
export default SliderShow;