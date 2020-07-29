
let initialObj = {

}



reducerFunction = (initialObj,action) =>{
    
    switch(action.type){
        case 'ACTION':
            return {
                // ...initialObj,
                 ...initialObj.actionVal = action.payload.data
            }
        break;
        // case 'ACTION1':
        //     return{
        //         ...initialObj.actionVal1 = action.payload
        //     }
        // break;
        default: return initialObj;
    }
}

export default reducerFunction;