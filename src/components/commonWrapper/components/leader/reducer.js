
const defaultState={
  list:[{
    "id":1001,
    "title":"科技报道",
    "link":"/detail/1001",
    "pubdata":"2018-4-5",
}], 
}
export default (state=defaultState,action)=>{

         switch(action.type)
         {
           
           case 'CHANGLEADER_LIST':{
            return{
              list:action.value
            }
           }
           default: return state
         }
}