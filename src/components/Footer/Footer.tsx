import React from 'react';
import classes from './Footer.module.scss';
import {FooterBottom} from "./FooterBottom/FooterBottom";

export type FooterPropsType = {

}

export const Footer:React.FC<FooterPropsType> = () => {

    return <div className={classes.footer}>
            <div className={classes.sharesAndDiscounts}>
                <h4 className={classes.title}>Хочу быть в курсе акций и новинок</h4>
                <div className={classes.input}>
                    <input placeholder="Мой Email" type="text"/>
                </div>
                <button className={classes.btn}>Подписаться</button>
            </div>
            <FooterBottom/>
    </div>  
}