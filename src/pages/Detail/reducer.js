  import  {CHANGE_INFO,GET_INFO} from './actionTypes'
const   defaultState={
  value:[{"subIds":["SN001-000007-6","SN001-000014-6"],"parentId":"GW001-00007-9"},{"subIds":["SN001-000009-4","SN001-000012-9","SN001-000011-0","SN001-000014-7"],"parentId":"GW001-00008-7"},{"subIds":["SN001-000014-3","SN001-000003-0"],"parentId":"GW001-00008-1"}],
  rows:[ ],
 loading:true
  }
  
export default (state=defaultState,action)=>{
    switch(action.type)
    { 
        case CHANGE_INFO:
        return { 
            ...action,
            ...state
        }
        case GET_INFO: 
        return {
         
          ...state ,
          ...action.value,
          loading:false
        }
        
      default: return state
    } 
}