import React from 'react';
import classes from './TextDescription.module.scss';
import LeftSideTitle from "../LeftsideTitle/LeftsideTitle";

export type TextDiscriptionType = {

}


const TextDescription:React.FC<TextDiscriptionType> = ( ) => {
    return  <div className={classes.wrap}>
                <LeftSideTitle title={"Описание"}/>
                <p className={classes.text}>Беспроводная дрель-шуруповерт DF333D WAE без труда просверливает древесину и сталь. Благодаря 2-ступенчатой настройке скорости, высокопрочной конструкции и питанию от надежных литий-ионных аккумуляторов эта модель широко используется в строительстве, ремонте, сборке мебели и других сферах. Компактные габариты, продуманная эргономика и ряд дополнительных функций позволяют работать с инструментом даже в труднодоступных местах. Эта версия электрошуруповерта Макита поставляется в кейсе, с 2-мя аккумуляторными блоками и зарядкой.</p>
    </div>

}

export default TextDescription;