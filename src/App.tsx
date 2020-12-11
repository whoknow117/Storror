import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {StoreType} from "./redux/store";
import Content from "./components/Content/Content";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const sidebar = props.store._state.sidebar;


    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Sidebar sidebar={sidebar}/>
                <div className="content">
                    <Route exact path='/storror' render={() => <Content/>}/>

                </div>
            </div>
        </div>
    );
}

export default App;
