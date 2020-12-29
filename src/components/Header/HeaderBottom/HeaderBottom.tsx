import React from 'react';
import classes from './HeaderBottom.module.scss';
import SearchIcon from "../../../assets/SearchIcon/SearchIcon";
import HeaderBottomNav from "./HeaderBottomNav/HeaderBottomNav";

export type HeaderBottomPropsType = {
    setCollapse: () => void
}

const HeaderBottom:React.FC<HeaderBottomPropsType>= ({setCollapse}) => {
    return <div className={classes.bottom}>
        <button onClick={setCollapse} className={classes.goodsBtn}><span className={classes.span}></span>Каталог товаров</button>
        <div className={classes.inputWrapper}>
            <button className={classes.btn}>
                <SearchIcon/>
            </button>
            <div className={classes.input}>
                <input type="text" placeholder="Поиск по товарам"/>
            </div>
        </div>
        <HeaderBottomNav/>
    </div>


}

export default HeaderBottom;