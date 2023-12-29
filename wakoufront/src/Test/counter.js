import React , { useState } from "react";
function Counter(){
    const [num , setNum] = useState(0);
    const Fincrease = function (){
        setNum(num + 1);
        console.log(num);
    }
    let counterMain = <button onClick={Fincrease}>{num}</button>
    console.log(num + "on counter");
    return counterMain;
}

export default  Counter;
