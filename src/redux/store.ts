import {v1} from "uuid";





export type SidebarType = Array<SidebarItemType>;

export type SidebarItemType = {

    name: string
    id: number
    path: string
}

export type NavbarType = Array<NavbarItemType>

export type NavbarItemType = {
    id: number
    title: string
    path: string
}

export type HeaderType = {
    logoName: string
    city: string
    phone: string
    navbar: Array<NavbarItemType>
}
export type ContentType = {

}


export type RootStateType = {
    header: HeaderType
    sidebar: SidebarType
    content: ContentType
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
                {id: 1, title: "Акции", path: '/'},
                {id: 2, title: "Информация", path: '/'},
                {id: 3, title: "Самовывоз", path: '/'},
                {id: 4, title: "Контакты", path: '/'},
                {id: 5, title: "Организациям", path: '/'},
            ],



        },
        sidebar: [

            {
                  name: 'Сантехника, Смесители, Трубы', id: 1, path: '/santehnika',
            },
            {
                name: 'Электрика, Освещение', id: 2, path: '/',
            },
            {
                      name: 'Крепеж, Гвозди, Саморезы, Хамуты', id: 3 , path: '/asd',
            },
            {
                  name: 'Лопаты, Сетка, Нитка ', id: 4, path: '/assd',
            },
            {name: 'Насосы, Реле, Датчики', id: 5, path: '/nasosy',
            },
            {
                 name: 'Электроинструмент, Бензоинструмент', id: 6, path: '/tovar',
            },
            {
                 name: 'Инструмент, Отвертки, Биты', id: 7, path: '/ss',
            },
            {   name: 'Газовые балоны, горелки, электроды', id: 8, path: '/sdas',
            },
            {
                   name: 'Бойлеры, газовые колонки', id: 9, path: '/ssasd',
            },
            {
                 name: 'Короба, Вентиляция', id: 10, path: '/s',
            },
            {
                  name: 'Сад-огород, Штуцера, Фитинги', id: 11, path: '/adaadss',
            },



        ],
        content: [],

    }


}


export default store;