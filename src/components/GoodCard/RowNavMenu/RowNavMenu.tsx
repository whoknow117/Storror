import React from 'react';
import classes from './RowNavMenu.module.scss';

export type RowNavMenuType = {

}


const RowNavMenu:React.FC<RowNavMenuType> = ( ) => {
    return  <div   className={classes.wrap}>
                <ul className={classes.list}>
                    <li className={classes.item}>О товаре</li>
                    <li className={classes.item}>Характеристики</li>
                    <li className={classes.item}>Услуги</li>
                    <li className={classes.item}>Отзывы</li>

                </ul>
    </div>

}

export default RowNavMenu;