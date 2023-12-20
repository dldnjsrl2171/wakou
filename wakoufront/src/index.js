import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/header';
import SideBar from './SideBar/SideBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <SideBar />
  </>
  , document.getElementById('root')
);