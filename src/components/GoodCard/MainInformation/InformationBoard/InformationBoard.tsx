import React from 'react';
import classes from './InformationBoard.module.scss';
import Rating from "../../../common/Rating/Rating";
import {ValuesType} from "../../../../App";

export type InformationBoardType = {
    onClick: (value: ValuesType) => void
    value: ValuesType
}


const InformationBoard: React.FC<InformationBoardType> = ({onClick, value}) => {
    return <div className={classes.wrap}>
        <Rating value={value} onClick={onClick}/>
    </div>


}

export default InformationBoard;