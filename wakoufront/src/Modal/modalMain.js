import {useState} from "react";
import "./modalMain.css";

export function ModalMain(command){
    const [data , setData] = useState(1);
    if(command == "login"){
        setData("Login");
    }
    const render = <div>{data}</div>
    return render;
}

export default ModalMain;
