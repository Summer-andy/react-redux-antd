const defaultState={
    list:false,
}

export  default (state=defaultState,action)=>{
 
    switch(action.type)
    {
        case 'MainList/CHANGE_LIST':
        return {
            list: !state.list,
        }
      default: return state
    }   

}