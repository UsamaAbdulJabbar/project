const INITIAL_STATE = {
    user : null,
    student : null,
    
}
 



export default(state = INITIAL_STATE,action)=>{
    if(action.type == "DATAFROMLOGIN"){
        state.user = action.payload;
        return{...state};

    }
    if(action.type == "DATAFROMTABLE"){
        state.student = action.payload;
        return{...state};

    }

    return state;
}