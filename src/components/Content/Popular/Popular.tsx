import React from 'react';
import classes from './Popular.module.scss';
import {PopularType} from "../../../redux/store";

type PopularPropsType = {
    popular: Array<PopularType>
}


const Popular: React.FC<PopularPropsType> = ({popular}) => {


    return  (
        <div>
            <div className={classes.title}>Популярные категории</div>
            <div className={classes.popular}>

                {popular.map( p => {
                    return  (
                        <div className={classes.wrap}>
                            <div className={classes.image}>
                                <img src={p.img} alt="#"/>
                            </div>
                            <div>
                                {p.title}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Popular;