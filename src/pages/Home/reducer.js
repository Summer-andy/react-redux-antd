import {CHANG_LIST,CHANG_LOGIN} from './actionTypes'
const defaultState={
    list:[]
}

export  default (state=defaultState,action)=>{
    switch(action.type)
    {
        case CHANG_LIST:
        return {
            list:action.value
        }
        case CHANG_LOGIN:   
        return {
            list:action.value
        }
      default: return state
    }   

}