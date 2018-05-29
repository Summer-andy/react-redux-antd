import  {GET_LINEINFO,GET_INFO }  from './actiontypes'
const defaultState={
    data:[ ],
    value:[{"subIds":["SN001-000007-6","SN001-000014-6"],"parentId":"GW001-00007-9"}],
}

export default (state=defaultState,action)=>{
    switch(action.type){
     case GET_LINEINFO:
     return{
    ...state,
    ...action.value
 
     }
     case GET_INFO:
     return{
        ...state,
        ...action,
     }
      default:return state
    }
}