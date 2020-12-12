import React  from 'react';
import classes from './GoodsPropositions.module.scss';
import {NavLink} from "react-router-dom";

export type GoodsType = {
    id: string
    title: string
    price: string
    img: string
    group: string
    made: string
    path: string

}
const goods: Array<GoodsType> = [
    {
        id: '1',
        title: "Шуруповерт Makita rx321 32/21 e1.25123551",
        price: '2 350 ₴',
        img: 'https://megatool.com.ua/image/cache/catalog/products/elektroinstrumenty/akkumulyatornaya-drel-shurupovert-makita-ddf453sfx7-700x700.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },
    {
        id: '2',
        title: "Змішувач для раковини F70A02100 AM.PM Spirit 2.0",
        price: '1 940 ₴',
        img: 'https://ceramroom.com.ua/content/images/14/70764548561237.jpeg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },
    {
        id: '3',
        title: "Водонагреватель ATLANTIC Atlantic Opro Classic VM 80 N4 (1200W)",
        price: '2 199 ₴',
        img: 'https://i1.foxtrot.com.ua/product/MediumImages/6377012_0.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },
    {
        id: '4',
        title: "Универсальный Насос LEO 3.0 776150 0.37кВт (APSm37AE)2 ",
        price: '1 250 ₴',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVDAh-57QKUoos97FAc8ivr17QjDyVDJ6tw&usqp=CAU',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    }, {
        id: '5',
        title: "Мойка высокого давления Karcher K 5 Full Control",
        price: '1 630 ₴',
        img: 'https://www.tradebox.dn.ua/img/catalog/o1528376236.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },

]

type GoodsPropositionsPropsType = {

}


const GoodsPropositions: React.FC<GoodsPropositionsPropsType> = () => {


    return <div>
        <div className={classes.title}> Специально для Вас</div>
        <div className={classes.goodsPropositions}>


            {goods.map(g => {

               if (g.id <= '5') {
                   return <NavLink to={g.path} className={classes.goodsItem}>
                       <div className={classes.wrap}>
                           <span className={classes.sticker}>новинка</span>
                           <div className={classes.image}>
                               <img src={g.img} alt="#"/>

                           </div>
                           <div className={classes.spanWrap}>
                               <span className={classes.spanTitle}>{g.title}</span>
                               <span className={classes.price}>{g.price}</span>
                           </div>
                           <button className={classes.btn}>купить</button>

                       </div>
                   </NavLink>
                }

            })}


        </div>
    </div>
}
export default GoodsPropositions;