export type SidebarType = Array<SidebarItemType>;

export type SidebarItemType = {

    name: string
    id: string
    path: string
}

export type NavbarType = Array<NavbarItemType>

export type NavbarItemType = {
    id: string
    title: string
    path: string
}
export type ItemsType = {
    title: string
}

export type HeaderType = {
    logoName: string
    city: string
    phone: string
    navbar: Array<NavbarItemType>
}
export type SliderType = {
    id: string
    img: string
}

export type ContentType = {
    slider: Array<SliderType>
    popular: Array<PopularType>
}

export type PopularType = {
    id: string
    title: string
    img: string
}

export type DropDownMenuType = {
    items: Array<ItemsType>
    head: string
    path: string

}
export type DropDownType = {
    [key: string]: Array<DropDownMenuType>
}

export type RootStateType = {
    header: HeaderType
    sidebar: SidebarType
    content: ContentType
    dropDown: DropDownType
}


export type StoreType = {
    getState: () => void
    _state: RootStateType
}


const store = {

    getState() {
        return this._state;
    },

    _state: {
        header: {
            logoName: "набженец",
            city: "Северодонецк",
            phone: "+38(099)777-77-77",
            navbar: [
                {id: '1', title: "Акции", path: '/'},
                {id: '2', title: "Информация", path: '/'},
                {id: '3', title: "Самовывоз", path: '/'},
                {id: '4', title: "Контакты", path: '/'},
                {id: '5', title: "Организациям", path: '/'},
            ],


        },
        sidebar: [

            {
                name: 'Сантехника, Смесители и Трубы', id: '1', path: '/santehnika',
            },
            {
                name: 'Электрика и Освещение', id: '2', path: '/',
            },
            {
                name: 'Крепеж, Гвозди, Саморезы и Хамуты', id: '3', path: '/asd',
            },
            {
                name: 'Лопаты, Сетка и Нитка ', id: '4', path: '/assd',
            },
            {
                name: 'Насосы, Реле и Датчики', id: '5', path: '/nasosy',
            },
            {
                name: 'Электроинструмент и Бензоинструмент', id: '6', path: '/tovar',
            },
            {
                name: 'Инструмент, Отвертки и Биты', id: '7', path: '/ss',
            },
            {
                name: 'Газовые балоны, горелки, электроды', id: '8', path: '/sdas',
            },
            {
                name: 'Бойлеры, газовые колонки', id: '9', path: '/ssasd',
            },
            {
                name: 'Короба, Вентиляция', id: '10', path: '/s',
            },
            {
                name: 'Сад-огород, Штуцера, Фитинги', id: '11', path: '/adaadss',
            },
            {
                name: 'Акции', id: '12', path: '/adaadss',
            },
            {
                name: 'Распродажа', id: '13', path: '/adaadss',
            },


        ],
        dropDown: {
            '1': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
                {
                    head: 'Трубы',
                    path: '/santehnika',
                    items: [
                        {title: 'Трубы'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },


            ],
            '2': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },

            ],

            '3': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],

            '4': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],

            '5': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '6': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],

            '7': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '8': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '9': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '10': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '11': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '12': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],
            '13': [
                {
                    head: 'Смесители',
                    path: '/santehnika',
                    items: [
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                        {title: 'Смесители для ванной'},
                    ]

                },
            ],



        },
        content: {
            slider: [
                {id: '1', img: 'https://www.minimum-price.ru/upload/iblock/ba5/banner_2_7683.jpg',},
                {id: '2', img: 'https://www.ecosum.ru/wp-content/uploads/ejednevnie-promokody-24-august-2020.jpg',},
                {id: '3', img: 'https://st.overclockers.ru/images/soft/2020/04/10/citi-ulet-sale.jpg',},
            ],
            popular: [
                {
                    id: '1',
                    title: 'Смесители',
                    img: ' https://sanroom.com.ua/files/thumbnail/5de683865b6cf126112M-797x797.jpg'
                },
                {
                    id: '2',
                    title: 'Бойлеры',
                    img: 'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/a/r/ariston_reg_80_v_1.5k_eu21.jpg'
                },
                {
                    id: '3',
                    title: 'Трубы',
                    img: ' https://i2.rozetka.ua/goods/2036932/copy_fado_mp01_20m_59301a8aee4dc_images_2036932308.jpg'
                },
                {
                    id: '4',
                    title: 'Электроинструмент',
                    img: 'https://e-altsest.com/image/cache/catalog/perf/boschgbh4-32dfr-500x500.jpeg'
                },
                {
                    id: '5',
                    title: 'Лаки и краски',
                    img: ' https://prorabmarket.com.ua/uploads/shop/products/medium/0305cc97ba0de9cd7415183c38a7e524.jpg'
                },
                {
                    id: '6',
                    title: 'Саморезы',
                    img: 'https://fenixcentr.kiev.ua/image/cache/catalog/obschestroj/metizy/1478798093_samorezi-simferopol-sevastopol-krim-1000x1000.jpg'
                },
                {
                    id: '7',
                    title: 'Насосы',
                    img: 'https://images.ua.prom.st/2571332144_w200_h200_stantsiya-035kvt-hmax.jpg'
                },
                {
                    id: '8',
                    title: 'Ручной инструмент',
                    img: 'https://intertool.ua/catalog/avtoinstrument/nabori-instrumentov/intertool-et-8056-photo-1.jpg'
                },
                {
                    id: '9',
                    title: 'Ручной инструмент',
                    img: 'https://intertool.ua/catalog/avtoinstrument/nabori-instrumentov/intertool-et-8056-photo-1.jpg'
                },
                {
                    id: '10',
                    title: 'Ручной инструмент',
                    img: 'https://intertool.ua/catalog/avtoinstrument/nabori-instrumentov/intertool-et-8056-photo-1.jpg'
                },

            ],
        },

    }


}


export default store;