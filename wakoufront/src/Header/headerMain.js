
/*CSS*/
import "./headerMain.css";
import HeaderLogo from "./Module/HeaderLogo/headerLogo";
import HeaderMenu from "./Module/HeaderMenu/headerMenu";

//Header Render
export function HeaderMain(){
    console.log("해더 메인 랜더링");
    const render = 
    <header>
        <div id="HeaderTop">
            <HeaderLogo/>
            <HeaderMenu/>
        </div>
        <div id="HeaderBottom">
        검색창
        </div>
    </header>;
    return render;
}

export default HeaderMain;
