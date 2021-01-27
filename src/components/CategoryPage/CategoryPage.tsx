import React from 'react';
import classes from './CategoryPage.module.scss';
import BreadCrumbs from "../GoodCard/MainInformation/BreadCrumbs/BreadCrumbs";

type CategoryPagePropsType = {

}

const CategoryPage:React.FC<CategoryPagePropsType> = ({}) => {
    return (
        <div>
            <h1>Категория</h1>
            <BreadCrumbs/>
        </div>
    )
}
export default CategoryPage;