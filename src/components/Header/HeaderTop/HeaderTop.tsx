import React from 'react';
import classes from './HeaderTop.module.scss';

const HeaderTop = () => {
    return  <div className={classes.top}>
        <div className={classes.phone}>
            +38(099)-777-77-77
        </div>
        <div className={classes.city}>г.Северодонецк</div>
        <nav className={classes.nav}>
            <ul>
                <li>Акции</li>
                <li>Организациям</li>
                <li>Контакты</li>
                <li>О нас</li>
            </ul>
        </nav>
    </div>




}

export default HeaderTop;