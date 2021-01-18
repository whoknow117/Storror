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
