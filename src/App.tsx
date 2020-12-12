import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {RootStateType, StoreType} from "./redux/store";
import Content from "./components/Content/Content";


type AppPropsType = {
    store: StoreType
    state: RootStateType
}


function App(props: AppPropsType) {

    const sidebar =  props.state.sidebar;
    const content = props.state.content;


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

                </div>
            </div>
        </div>
    );
}

export default App;
