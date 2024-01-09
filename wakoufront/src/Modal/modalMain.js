import { useSelector } from "react-redux";
import "./modalMain.css";
import modalLoginMain from "./Module/modalLogin";
export function ModalMain(){

    const profile = useSelector((state)=>state.profile)
    if(profile==="close"){
        return null;
    }
    const render = 
    (
    <div id="ModalContainer">
        <div id="Modal">
         {modalSelector(profile)}
        </div>
    </div>
    );
    return render;
}
export default ModalMain;


function modalSelector(profile){
    let module = null;
    switch(profile){
        case "modalLogin" :  module = modalLoginMain;
        break;
        
        default : return null;
    }

    return module();
}