import {GETGATEWAYNODEINFOCHARGE,GETCHILD} from './actionTypes'

const defaultState = {
    rows:[],
    data:{ rows:[]}
}
export default(state = defaultState, action) => {
    switch (action.type) {
      case GETGATEWAYNODEINFOCHARGE:
       return{
           ...state,
           ...action.value
       }
       case GETCHILD :
       return{
            ...state,
         ...action.value,
       }

        default:return state
    }

}
