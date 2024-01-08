import React, { useContext, useState } from "react";
import "./headerMenu.css";
import HeaderLoginButtonImage from "../../Img/HeaderLoginButton.png";
import { Common } from "../../../app";
import { useDispatch } from "react-redux";


export function HeaderMenu(){
    console.log("헤더메뉴 랜더링");
    const render = 
    <div id="HeaderMenu">
        <HeaderLoginButton />
    </div>
    return render;
}

export default HeaderMenu;


function HeaderLoginButton(){
    console.log("버튼 랜더링");
    const dispatch = useDispatch();
    const render =
    <button id="HeaderLoginButton" title="CallLoginButton" onClick={()=>{dispatch({type : "Login"})}}>
        <img src={HeaderLoginButtonImage} id="HeaderLoginButtonImage"></img>
    </button>
    
    return render;
}


function HeaderRegisterButton(){
    
}