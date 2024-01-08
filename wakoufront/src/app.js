import React, { useState } from 'react';
import "./root.css";
import Header from './Header/headerMain';
import Body from './Body/bodyMain';
import SideBar from './SideBar/SideBar';

import ModalMain from './Modal/modalMain';
import store from './Store/store';
import { Provider, useSelector } from 'react-redux';

export function App(){
    return (
    <React.Fragment>
        <Provider store={store}>
        <CommonRender />
        <ModalRender />
        </Provider>
    </React.Fragment>
    );
}

export default App;

export const Common = React.createContext();

function CommonRender(){
    
    console.log("전체 랜더링");

    const render = (
        <React.Fragment>
            <Common.Provider value={ModalRender()}>
                <Header></Header>
                <SideBar></SideBar>
                <Body></Body>
            </Common.Provider>
        </React.Fragment>
    )
    return render;
    
}

function ModalRender(){
    console.log(store);
    const render = (
        <React.Fragment>
            <ModalMain profile={useSelector((state)=>state.profile)}></ModalMain>
        </React.Fragment>
    )
    return render;
}
