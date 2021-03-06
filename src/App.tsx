import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {RootStateType, StoreType} from "./redux/store";
import Content from "./components/Content/Content";
import GoodCard from "./components/GoodCard/GoodCard";
import Drill from "./assets/Drill/Drill";
import Boiler from "./assets/Boiler/Boiler";
import Electric from "./assets/Electric/Electric";
import Garden from "./assets/Garden/Garden";
import Gas from "./assets/Gas/Gas";
import Hose from "./assets/Hose/Hose";
import Pump from "./assets/Pump/Pump";
import Shovel from "./assets/Shovel/Shovel";
import Ventilation from "./assets/Ventilation/Ventilation";
import Carts from "./assets/Carts/Carts";
import Fasteners from "./assets/Fasteners/Fasteners";
import Sale from "./assets/Sale/Sale";
import Discount from "./assets/Discount/Discount.";


export type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

export type GoodsType = {
    id: string
    title: string
    price: string
    img: string
    group: string
    made: string
    new: boolean
    sale: boolean
    path: string
    hit: boolean
    images: Array<string>

}
const goods: Array<GoodsType> = [
    {
        id: '1',
        title: "Шуруповерт Makita rx321 32/21 e1.25123551",
        price: '2 350 ₴',
        img: 'https://maklta.com.ua/userfiles/image/catalog/6271dwpe1.jpg',
        group: 'electro-tools',
        images: [
            'https://maklta.com.ua/userfiles/image/catalog/6271dwpe1.jpg',
            'https://maklta.com.ua/userfiles/image/catalog/df333dwye_makita.jpg',
            'https://maklta.com.ua/userfiles/image/catalog/ddf484rx4_makita.jpg',
            'https://stock-stroy.com/content/images/18/akkumulyatornaya-drel-shurupovert-makita-df330dwe-57796304208823.jpg',
            'https://japan-ukraine.com/product/159218/main.jpg',
                    ],
        new: true,
        sale: false,
        hit: false,
        made: 'Japan',
        path: '/tovar/123151'
    },
    {
        id: '2',
        title: "Змішувач для раковини F70A02100 AM.PM Spirit 2.0",
        price: '1 940 ₴',
        img: 'https://ceramroom.com.ua/content/images/14/70764548561237.jpeg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        new: true,
        sale: false,
        hit: false,
        made: 'Japan',
        path: '/tovar/123152'
    },
    {
        id: '3',
        title: "Водонагреватель ATLANTIC Atlantic Opro Classic VM 80 N4 (1200W)",
        price: '2 199 ₴',
        img: 'https://i1.foxtrot.com.ua/product/MediumImages/6377012_0.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://brain.com.ua/static/images/prod_img/2/7/U0371027_big.jpg',
            'https://img.mvideo.ru/Pdb/20031715b.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg',
            'https://s1.kaercher-media.com/products/15209300/main/1/d3.jpg',
        ],
        made: 'Japan',
        new: true,
        sale: false,
        hit: false,
        path: '/tovar/123154'
    },
    {
        id: '4',
        title: "Универсальный Насос LEO 3.0 776150 0.37кВт (APSm37AE)2 ",
        price: '1 250 ₴',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVDAh-57QKUoos97FAc8ivr17QjDyVDJ6tw&usqp=CAU',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: true,
        sale: false,
        hit: false,
        path: '/tovar/123156'
    }, {
        id: '5',
        title: "Мойка высокого давления Karcher K 5 Full Control",
        price: '1 630 ₴',
        img: 'https://karchershop-ac.com/image/cache/catalog/k-3/kupit-mojku-karcher-k-3-16018120-0-900x900.jpg',
        group: 'electro-tools',
        images: [
            'https://karchershop-ac.com/image/cache/catalog/k-3/kupit-mojku-karcher-k-3-16018120-0-900x900.jpg',
            'https://brain.com.ua/static/images/prod_img/2/7/U0371027_big.jpg',
            'https://img.mvideo.ru/Pdb/20031715b.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg',
            'https://s1.kaercher-media.com/products/15209300/main/1/d3.jpg',
        ],
        made: 'Japan',
        new: true,
        sale: false,
        hit: false,
        path: '/tovar/123169'
    },
    {
        id: '6',
        title: "Сетка рабица 40х40х120",
        price: '24 ₴',
        img: 'https://www.materik-m.ru/upload/iblock/e02/e028e2a423fe8436e0e48e045eeb53d8.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: true,
        hit: false,
        path: '/tovar/123115'
    },
    {
        id: '7',
        title: "Колено канализация 50/90",
        price: '8 ₴',
        img: 'https://ostendorf.ru/storage/photo/resized/xy_800x600/f/athf0cg8z14vm0x_343282e4.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: true,
        hit: false,
        path: '/tovar/123112'
    },
    {
        id: '34',
        title: "Пистолет для полива Presto AB123-34",
        price: '130 ₴',
        img: 'https://s1.topchina.guru/item_image_plitka/ae01.alicdn.com/kf/HTB15OqtkfBNTKJjSszcq6zO2VXaE/8-Mutifunctional.jpg_640x640.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: false,
        hit: true,
        path: '/tovar/123124'
    },
    {
        id: '44',
        title: "Шланг Presto Euro Yellow 3/4",
        price: '1 250 ₴',
        img: 'https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_72-724.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: false,
        hit: true,
        path: '/tovar/123146'
    }, {
        id: '115',
        title: "Дрель Ударная MAKITA HP1640 (HP1640)",
        price: '2 630 ₴',
        img: 'https://brain.com.ua/static/images/prod_img/3/9/U0285239_big.jpg',
        group: 'electro-tools',
        images: [
            'https://brain.com.ua/static/images/prod_img/3/9/U0285239_big.jpg',
            'https://www.motoblok.biz/uploads/e1/c4/dd1680360f24ab252ef1495acbffc4e1.jpg',
            'https://santel.kiev.ua/images/product_images/popup_images/3050_0.jpg',
            'https://cdn.27.ua/499/91/0a/102666_1.jpeg',
            'https://maklta.com.ua/userfiles/image/catalog/makita-hp1640k2.jpg',
        ],
        made: 'Japan',
        new: false,
        sale: false,
        hit: true,
        path: '/tovar/123113'
    },
    {
        id: '11',
        title: "Смеситель кухонный Grohe Auqa clear stick AB 1280",
        price: '2 450 ₴',
        img: 'https://stevian.com.ua/media/catalog/product/cache/1/image/650x650/1f39608415b261262179a2ad116c74b9/2/3/23739002.jpg',
        group: 'electro-toolse',
        images: [
            'https://stevian.com.ua/media/catalog/product/cache/1/image/650x650/1f39608415b261262179a2ad116c74b9/2/3/23739002.jpg',
            'https://royalclimate.com.ua/image/cache/catalog/grohe/8/app_default-media-eshop-smesiteli-dlya-kuhni-_cache-18187-1_523_458_5-1000x1000.jpg',
            'https://www.santechshara.com.ua/i/goods/gallery_photo/photo/1011/01.jpg',
            'https://diceramica.com.ua/image/cache/catalog/products/new/grohe/essence-new/zmishuvach-dlya-rakovini-grohe-essence-new-23541001-500x500.jpg',
            'https://sanroom.com.ua/files/thumbnail/5de6828ec1c8431562SD0-797x797.jpg',
        ],
        made: 'Japana',
        new: false,
        sale: false,
        hit: true,
        path: '/tovar/123543'
    },
    {
        id: '12',
        title: "Генератор Forte FGD6500E3 (30750)",
        price: '14 940 ₴',
        img: 'https://220volt.com.ua/uploads/gallery_photo/photo/0593/23.png',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: false,
        hit: true,
        path: '/tovar/123150'
    },
    {
        id: '13',
        title: "Набор пилок DEWALT DT2163 (5 шт)",
        price: '199 ₴',
        img: 'https://i1.foxtrot.com.ua/product/MediumImages/6306110_0.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: true,
        hit: false,
        path: '/tovar/123111'
    },
    {
        id: '14',
        title: "Стабилизатор напряжения FORTE TDR-2000VA (22650 ",
        price: '1 440 ₴',
        img: 'https://i1.foxtrot.com.ua/product/MediumImages/6134264_0.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: true,
        hit: false,
        path: '/tovar/123133'
    }, {
        id: '15',
        title: "Прожектор V-TAC SKU-5954 E-series 30W 6400К (3800157625470)",
        price: '330 ₴',
        img: 'https://i1.foxtrot.com.ua/product/MediumImages/6563996_0.jpg',
        group: 'electro-tools',
        images: [
            'https://www.motoblok.biz/uploads/01/ce/000003287_51243f76-6ed4-4fe9-98b0-e942a1b3ce01.jpg',
            'https://www.motoblok.biz/uploads/10/60/000003287_489151bc-f833-42c6-a21d-11a84a106010.jpg'
        ],
        made: 'Japan',
        new: false,
        sale: true,
        hit: false,
        path: '/tovar/123131'
    },

]




const sidebarIcons = [
    {id: '1', icon: <Drill/>},
    {id: '2', icon: <Boiler/>},
    {id: '3', icon: <Electric/>},
    {id: '4', icon: <Garden/>},
    {id: '5', icon: <Gas/>},
    {id: '6', icon: <Hose/>},
    {id: '7', icon: <Pump/>},
    {id: '8', icon: <Shovel/>},
    {id: '9', icon: <Ventilation/>},
    {id: '10', icon: <Carts/>},
    {id: '11', icon: <Fasteners/>},
    {id: '12', icon: <Sale/>},
    {id: '13', icon: <Discount/>},
]


type AppPropsType = {
    store: StoreType
    state: RootStateType
}


function App(props: AppPropsType) {

    const sidebar = props.state.sidebar;
    const content = props.state.content;

    const [value, setValue] = useState<ValuesType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);


        window.addEventListener('scroll',(event) => {
            (window.pageYOffset >= 100 ? setHeaderCollapsed(true) : setHeaderCollapsed(false))

        })



    const setCollapsedCallback = () => {

            setCollapsed(!collapsed)

    }
    console.log(collapsed);
    return (
        <div className="App">
           <div className="container">
               <Header headerCollapsed={headerCollapsed} collapsed={collapsed} setCollapse={setCollapsedCallback}/>
               <div className="wrapper">

                        <Sidebar
                            collapsed={collapsed}
                            setCollapsedCallback={setCollapsedCallback}
                            sidebar={sidebar}
                            state={props.state}
/>



                   <div className="content">
                       <Route exact path='/storror' render={() => <Content
                           collapsed={collapsed}
                           content={content}
                           setCollapsedCallback={setCollapsedCallback}
                           value={value}
                           onClick={setValue}
                           goods={goods}

                       />}/>
                       {goods.map((good, idx) => {
                           return <Route key={idx} path={good.path}
                                         render={() => <GoodCard id={good.id}
                                                                 onClick={setValue}
                                                                 value={value}
                                                                 title={good.title}
                                                                 price={good.price}
                                                                 img={good.img}
                                                                 group={good.group}
                                                                 made={good.made}
                                                                 path={good.path}
                                                                 images={good.images}


                                         />}

                           />
                       })}


                   </div>
               </div>
           </div>
        </div>
    );
}

export default App;
