import React from 'react';
import classes from './Products.module.scss.module.scss';

export type ProductsPropsType = {

}

export const Products:React.FC<ProductsPropsType> = () => {

    return <div className={classes.products}>
                <h3 className={classes.title}></h3>
                <ul>
                    <li>список</li>
                </ul>

    </div>
}