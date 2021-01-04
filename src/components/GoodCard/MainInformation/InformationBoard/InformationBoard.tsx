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
        <div className={classes.art}>
            Код товара:<span>123353</span>
        </div>
       <div className={classes.rating}>
           <Rating value={value} onClick={onClick}/>
       </div>
    </div>


}

export default InformationBoard;