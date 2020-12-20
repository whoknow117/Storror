import React from 'react';
import classes from  './Star.module.scss';
import {ValuesType} from "../../../../App";
import StarIcon from "../../../../assets/StarIcon/StarIcon";


export type StarPropsType = {
    selected: boolean
    onClick: (value: ValuesType) => void
    value: ValuesType
}

const Star:React.FC<StarPropsType>= ({onClick,value, selected}) => {

    const changeStatusCallback = () => {onClick(value)}

    return <div onClick={changeStatusCallback}  className={`${classes.common} ${selected ? classes.active : ""}`}>
        <StarIcon/>
    </div>
}

export default Star;