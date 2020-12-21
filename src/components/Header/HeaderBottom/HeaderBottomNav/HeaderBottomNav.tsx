import React from 'react';
import classes from './HeaderBottomNav.module.scss';
import Heart from "../../../../assets/Heart/Heart";
import Basket from "../../../../assets/Basket/Basket";
import Person from "../../../../assets/Person/Person";
import House from "../../../../assets/House/House";

const HeaderBottomNav = () => {
    return (

            <ul className={classes.menuIcon}>
                <li className={classes.iconItems}><House/>
                    Главная</li>
                <li className={classes.iconItems}><Person/>
                Войти</li>
                <li className={classes.iconItems}><Heart/>
                Избранное</li>
                <li className={classes.iconItems}><Basket/>
                Корзина</li>
            </ul>

    )







}

export default  HeaderBottomNav;