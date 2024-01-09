//InitState
const initState = {profile : "close"};

export function ModalReducer(state = initState , action){
    
    const newState = {...state};

    //Action
    switch(action.type){
        case "modalLogin" : newState.profile = action.type;
        break;
        
    }

    
    return newState;
}
export default ModalReducer;