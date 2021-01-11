import React, {useEffect} from 'react';
import classes from './GoodsAssembly.module.scss';
import House from "../../../assets/House/House";
import Place from "../../../assets/Place/Place";
import Ventilation from "../../../assets/Ventilation/Ventilation";
import Hose from "../../../assets/Hose/Hose";



type GoodsAssemblyPropsType = {

}


const GoodsAssembly: React.FC<GoodsAssemblyPropsType> = () => {



    return  (
        <div data-aos-mirror="true" data-aos="fade-right" className={classes.goodsAssembly}>
            <div className={classes.title}>Готовые сборки</div>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <House/>
                    <div className={classes.name}>Для дачи</div>
                </li>
                <li className={classes.item}>
                    <Place/>
                    <div className={classes.name}>Для дома</div>
                </li>
                <li className={classes.item}>
                    <Ventilation/>
                    <div className={classes.name}>Для газа</div>
                </li>
                <li className={classes.item}>
                     <Hose/>
                    <div className={classes.name}>Для воды</div>
                </li>
            </ul>
        </div>
    )
}
export default GoodsAssembly;