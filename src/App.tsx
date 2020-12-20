import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {RootStateType, StoreType} from "./redux/store";
import Content from "./components/Content/Content";
import GoodCard from "./components/GoodCard/GoodCard";

export type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

export type GoodsArrayType = {
    id: string
    title: string
    price: string
    img: string
    group: string
    made: string
    path: string

}
const goodsArray: Array<GoodsArrayType> = [
    {
        id: '1',
        title: "Шуруповерт Makita rx321 32/21 e1.25123551",
        price: '2 350 ₴',
        img: 'https://megatool.com.ua/image/cache/catalog/products/elektroinstrumenty/akkumulyatornaya-drel-shurupovert-makita-ddf453sfx7-700x700.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/tovar/123151'
    },
    {
        id: '2',
        title: "Змішувач для раковини F70A02100 AM.PM Spirit 2.0",
        price: '1 940 ₴',
        img: 'https://ceramroom.com.ua/content/images/14/70764548561237.jpeg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/tovar/123152'
    },
    {
        id: '3',
        title: "Водонагреватель ATLANTIC Atlantic Opro Classic VM 80 N4 (1200W)",
        price: '2 199 ₴',
        img: 'https://i1.foxtrot.com.ua/product/MediumImages/6377012_0.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/tovar/123153'
    },
    {
        id: '4',
        title: "Универсальный Насос LEO 3.0 776150 0.37кВт (APSm37AE)2 ",
        price: '1 250 ₴',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVDAh-57QKUoos97FAc8ivr17QjDyVDJ6tw&usqp=CAU',
        group: 'electro-tools',
        made: 'Japan',
        path: '/tovar/123154'
    }, {
        id: '5',
        title: "Мойка высокого давления Karcher K 5 Full Control",
        price: '1 630 ₴',
        img: 'https://www.tradebox.dn.ua/img/catalog/o1528376236.jpg',
        group: 'electro-tools',
        made: 'Japan',
        path: '/tovar/123156'
    },

]


type AppPropsType = {
    store: StoreType
    state: RootStateType
}


function App(props: AppPropsType) {

    const sidebar = props.state.sidebar;
    const content = props.state.content;

    const [value, setValue] = useState<ValuesType>(0);

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const setCollapsedCallback = () => {
        setCollapsed(!collapsed);
    }
    console.log(collapsed);
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Sidebar
                    collapsed={collapsed}
                    setCollapsedCallback={setCollapsedCallback}
                    sidebar={sidebar}/>
                <div className="content">
                    <Route exact path='/storror' render={() => <Content
                        collapsed={collapsed}
                        content={content}
                        setCollapsedCallback={setCollapsedCallback}

                    />}/>
                    {goodsArray.map((good,idx) => {
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


                                      />}

                        />
                    })}


                </div>
            </div>
        </div>
    );
}

export default App;
