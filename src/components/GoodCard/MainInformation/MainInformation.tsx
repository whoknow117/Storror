import React from 'react';
import classes from './MainInformation.module.scss';
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import InformationBoard from "./InformationBoard/InformationBoard";
import GoodCardTitle from "./GoodCardTitle/GoodCardTitle";

import {ValuesType} from "../../../App";

export type MainInformationType = {
    onClick: (value: ValuesType) => void
    value: ValuesType
}


const MainInformation: React.FC<MainInformationType> = ({onClick, value}) => {
    return <div className={classes.wrap}>
        <BreadCrumbs/>
        <InformationBoard onClick={onClick} value={value}/>
        <GoodCardTitle/>

    </div>


}

export default MainInformation;