import {GET_USERINFO} from './actionTypes'
const   defaultState={
         data:[{
             rows:[]
         }]
}

export default (state=defaultState,action)=>{

    switch(action.type){
          case GET_USERINFO:
            return{
                ...action.value
            }
        default:return  state
    }
}