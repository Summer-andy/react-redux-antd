export const getChangeListAction=(list)=>({
  
    type: 'MainList/CHANGE_LIST',
    value:list,

})

export const getMain=()=>{
    return(dispatch)=>{
        dispatch(getChangeListAction(false))
    }
}
export const changeShow=()=>{
  return(dispatch)=>{
    dispatch(getChangeListAction(true))         
  }
}