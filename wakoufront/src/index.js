import React from 'react';
import ReactDOM from 'react-dom/client';
import "./root.css";
import Header from './Header/headerMain';
import SideBar from './SideBar/SideBar';
import Modal from "./Modal/modalMain";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Header />
    <Modal />
    <SideBar />
  </React.Fragment>
);