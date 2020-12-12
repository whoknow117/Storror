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
        price: '1 250 грн',
        img: 'https://megatool.com.ua/image/cache/catalog/products/elektroinstrumenty/akkumulyatornaya-drel-shurupovert-makita-ddf453sfx7-700x700.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },
    {
        id: '2',
        title: "Шуруповерт Makita rx321",
        price: '1 250 грн',
        img: 'https://images.ua.prom.st/2212077534_w640_h640_akkumulyatornyj-shurupovert-makita.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },
    {
        id: '3',
        title: "Шуруповерт Makita rx321",
        price: '1 250 грн',
        img: 'https://toolsup.com.ua/image/cache/catalog/makita/mktnxfd11zb-700x700.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    },
    {
        id: '4',
        title: "Шуруповерт Makita rx321",
        price: '1 250 грн',
        img: 'https://tdp.com.ua/images/catalog/b97a7d7631/1524653419_eaaf0cef0dad0a3e94e42bf8e4bbbeb3.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/'
    }, {
        id: '5',
        title: "Шуруповерт Makita rx321",
        price: '1 250 грн',
        img: 'https://www.motoblok.biz/uploads/processed/87/cf/2f1990276e08c457ce0af0714f38cf87-415x415.jpg',
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

               if (g.id <= '4') {
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