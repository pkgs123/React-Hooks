let initialState={

}

action1value = () =>{
return{
    ...initialState,
    action1Val:action.payload
}
}

reducerFunct1 = (initialState,action) =>{

        switch(action.type){
            case 'ACTION1':
                return action1value(action)
            break;
            default: return initialState;
        }
}

export default reducerFunct1;