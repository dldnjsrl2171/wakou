import React , {useState} from 'react';
export function ModalMain(modalData){
    const [modal , modalSet] = useState("hi");
    console.log("랜더링");

    
    return modal;
}

export default ModalMain;

export function ModalDataSet(props){
    console.log({props});
    let modalData = null;
    switch(props){
        case "Login" : 
        modalData = 
        <div id="headerLogin">
            <form id="headerLoginForm">
                <input type="text"      id="loginId"    title="ID"  placeholder="IDを入力してください"></input>
                <input type="password"  id="loginPw"    title="PW"  placeholder="PWを入力してください"></input>
                <input type="button"    id="loginSubmit" title="LOGIN" value="LOGIN"></input>
            </form>
        </div>;
        break;
        default : 
        modalData = <div id="modal"></div>;
        break;
    }
    console.log(modalData);
    ModalMain(modalData);
}