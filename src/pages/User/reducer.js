import {GET_USERINFO,SHOWORNOT,ADDRESULT} from './actionTypes'
const   defaultState={
         data:[{
             rows:[]
         }],
         visible:false,
         result:''
}

export default (state=defaultState,action)=>{
 
    switch(action.type){
          case GET_USERINFO:
            return{
                ...state,
                ...action.value
            }

          case SHOWORNOT:
          return{
              ...state,
              ...action
          } 
          case ADDRESULT:
          return{
              ...state,
              ...action
          }
        default:return  state
    }
}