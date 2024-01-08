//CSS
import "./headerLogo.css";
//LogoImageFile
import logoImageFile from "../../Img/HeaderLogoImage.png";


/*ModuleMain*/
export function HeaderLogo(){
    console.log("헤더 로그 랜더링");
    const render = 
    <div id="HeaderLogo">
        <LogoImage />
    </div>
    return render;
}

export default HeaderLogo;

/*Tags*/
function LogoImage(){
    console.log("img랜더링");
    const tag = <img id="HeaderLogoImg" src={logoImageFile} alt="대체 이미지" onClick={LogoClick}></img>
    return tag;
}

/*Event*/
function LogoClick(){
    console.log("로고를 클릭하였습니다.");
    return 1;
}