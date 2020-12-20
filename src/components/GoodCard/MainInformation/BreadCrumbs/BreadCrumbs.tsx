import React from 'react';
import classes from './BreadCrumbs.module.scss';

export type BreadCrumbsType = {

}


const BreadCrumbs:React.FC<BreadCrumbsType> = ( ) => {
    return  <div className={classes.breadCrumbs}>
            <ul className={classes.list}>
                <li className={classes.item}>Главная</li>
                <li className={classes.item}>Каталог</li>
                <li className={classes.item}>Шуруповерты</li>
                <li className={classes.item}>Шуруповерт Makita 123515 Rxs black 12v без аккумулятора</li>
            </ul>
    </div>




}

export default BreadCrumbs;