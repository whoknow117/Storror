import React from 'react';
import classes from './GoodCardTitle.module.scss';

export type GoodCardTitleType = {
    title: string
}


const GoodCardTitle:React.FC<GoodCardTitleType> = ( {title}) => {
    return  <div className={classes.wrap}>
            <h2 className={classes.title}>{title}</h2>
    </div>




}

export default GoodCardTitle;