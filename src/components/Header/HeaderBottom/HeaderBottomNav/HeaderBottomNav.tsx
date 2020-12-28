import React from 'react';
import classes from './HeaderBottomNav.module.scss';
import Heart from "../../../../assets/Heart/Heart";
import Basket from "../../../../assets/Basket/Basket";
import Person from "../../../../assets/Person/Person";
import House from "../../../../assets/House/House";
import BookMark from "../../../../assets/Bookmark/BookMark";

const HeaderBottomNav = () => {
    return (

            <ul className={classes.menuIcon}>
                <button className={classes.iconItems}><BookMark/>
                </button>
                <button className={classes.iconItems}><House/>
                    Главная</button>
                <button className={classes.iconItems}><BookMark/>
                     Закладки</button>
                <button className={classes.iconItems}><Person/>
                Войти</button>
                <button className={classes.iconItems}><Heart/>
                Избранное</button>
                <button className={classes.iconItems}><Basket/>
                Корзина</button>
            </ul>

    )







}

export default  HeaderBottomNav;