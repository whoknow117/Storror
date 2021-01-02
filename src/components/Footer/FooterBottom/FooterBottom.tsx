import React from 'react';
import classes from './FooterBottom.module.scss';

export type FooterBottomPropsType = {

}

export const FooterBottom:React.FC<FooterBottomPropsType> = () => {

    return <div className={classes.footerBottom}>
                <div className={classes.footerContacts}>
                    <h3 className={classes.title}>Контакты</h3>
                    <h6 className={classes.title2}>Адреса магазинов</h6>
                    <div className={classes.contacts}>
                        <span className={classes.phone}>+38(099)-777-77-77</span>
                        <span className={classes.city}>Северодонецк</span>
                    </div>
                    <div className={classes.btns}>
                        <button className={classes.btn}>Перезвонить мне</button>
                        <button className={classes.btn}>Задать вопрос</button>
                    </div>
                </div>
                <div className={classes.footerNavigation}></div>

    </div>
}