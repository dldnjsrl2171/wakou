export function ModalReducer(state , action){
    if(state === undefined){
        return {profile : "close"} ;
    }
    const newState = {...state};
    if(action.type === "Login"){
        newState.profile = "Login";
    }
    return newState;
}
export default ModalReducer;