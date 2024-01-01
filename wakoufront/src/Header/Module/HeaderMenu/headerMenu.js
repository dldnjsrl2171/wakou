import "./headerMenu.css";
import HeaderLoginButtonImage from "../../Img/HeaderLoginButton.png";
import ModalMain from "../../../Modal/modalMain";

export function HeaderMenu(){
    const render = 
    <div id="HeaderMenu">
        <HeaderLoginButton />
    </div>
    return render;
}

export default HeaderMenu;

function HeaderLoginButton(){
    const render =
    <button id="HeaderLoginButton" title="CallLoginButton">
        <img src={HeaderLoginButtonImage} id="HeaderLoginButtonImage" onClick={callLoginModal}></img>
    </button>
    function callLoginModal(){
        console.log("모달 창 호출");
        ModalMain("Login");
    }
    return render;
}

function HeaderRegisterButton(){
    
}