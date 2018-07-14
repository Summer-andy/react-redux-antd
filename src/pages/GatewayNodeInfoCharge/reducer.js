import {GETGATEWAYNODEINFOCHARGE,GETCHILD,DELETE,SHOWMODAL,DISPLAYMODAL,ADD,MODIFY} from './actionTypes'

const defaultState = {
    rows:[],
    data:{ rows:[]},
    value:{code:0},
    visible: false,
    modifyVisible:false
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
       case DELETE:
       return{
             ...state,
             ...action,
       }
       case SHOWMODAL:
       return{
                ...state,
                ...action
       }
       case  DISPLAYMODAL:
       return{
           ...state,
           ...action
       }
       case ADD:
       return{
           ...state,
           ...action
       }
       case MODIFY:
       return{
           ...state,
           ...action
       }
        default:return state
    }

}
