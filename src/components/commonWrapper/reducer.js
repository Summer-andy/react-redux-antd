import { CHANG_LIST} from './actionTypes'
const defaultState={
  list:[{
    "id":1001,
    "title":"空中英语教室",
    "link":"/list/1001"
}], 
}
export default (state=defaultState,action)=>{
         switch(action.type)
         {
           
           case CHANG_LIST:{
            return{
              list:action.value
            }
           }
           default: return state
         }
}