import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/header';
import Modal from './Modal/modal';
import SideBar from './SideBar/SideBar';
import Counter from './Test/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Modal  />
    <SideBar />
    <Counter />
  </>
);