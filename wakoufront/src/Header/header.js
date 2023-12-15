import "./header.css";
import LogoImg from "./Img/Wakou-logo.png";

//Header Render
function headerMain(){
    let header = 
    <header>
        {headerLogoBox()}
        {headerLoginBox()}
    </header>;
    return (header);
}

export default headerMain;

/* Logo */
//Header Logo
function headerLogoBox(){
    const headerLogo = 
    <div id="headerLogo" onClick={logoClick}>
        <a href="/">
            <img src={LogoImg} id="headerLogoImg"></img>
        </a>
    </div>;
    return headerLogo;
}

function logoClick(){
    console.log("로고 클릭");
    return 1;
}

/* Header Login */
//Header Login Box
function headerLoginBox(){
    //Not Logined (Default)
    let headerLogin = 
    <div id="headerLogin">
        <form id="headerLoginForm">
            <input type="text"      id="loginId"    title="ID"  placeholder="IDを入力してください"></input>
            <input type="password"  id="loginPw"    title="PW"  placeholder="PWを入力してください"></input>
            <input type="button"    id="loginSubmit" title="LOGIN" value="LOGIN"></input>
        </form>
    </div>;

    //Logined
    let logined = false;
    if(logined){
        headerLogin = 
        <div id="headerLogin">
            로그인 완료
        </div>;
    }

    return headerLogin;
}
