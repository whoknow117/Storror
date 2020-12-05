import React from 'react';
import classes from './HeaderBottomNav.module.scss';
import Heart from "../../../../assets/Heart/Heart";
import Basket from "../../../../assets/Basket/Basket";
import Person from "../../../../assets/Person/Person";

const HeaderBottomNav = () => {
    return (

            <ul className={classes.menuIcon}>
                <li className={classes.iconItems}><Person/></li>
                <li className={classes.iconItems}><Heart/></li>
                <li className={classes.iconItems}><Basket/></li>
            </ul>

    )







}

export default  HeaderBottomNav;