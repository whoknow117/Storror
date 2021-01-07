import React from 'react';
import classes from './LeftsideTitle.module.scss';

export type LeftsideTitleType = {
    title?: string
}


const LeftSideTitle:React.FC<LeftsideTitleType> = ({children,title}) => {
    return  <div className={classes.wrap}>
        {(title ? <h4 className={classes.title}>{title}</h4> : "")}
        <span className={classes.span}>Все характеристики</span>
    </div>




}

export default LeftSideTitle;