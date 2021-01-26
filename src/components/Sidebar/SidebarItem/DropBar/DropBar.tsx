import React from 'react';
import classes from './DropBar.module.scss';
import {DropBarPropsType} from "../../../../types/types";




const DropBar:React.FC<DropBarPropsType> = ({item,}) => {
    return <div className={classes.wrapper}>

        <h6>{item.head}</h6>
        <ul className={classes.list}>
            {item.items.map((l, idx)  => {
                return <li key={idx}>{l.title}</li>
            })}
        </ul>
    </div>
}
export default DropBar;
