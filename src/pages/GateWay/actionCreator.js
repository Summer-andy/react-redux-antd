import {GET_LINEINFO,GET_INFO}  from './actiontypes'
import axios from 'axios'
axios.defaults.withCredentials = true;
export const getUserInfoList=(list)=>({
    type:GET_LINEINFO,
    value:list
})
export const getInfo=(list)=>({
    type:GET_INFO,
    value:list

})

export const getNodeInfo=()=>{
   return(dispatch)=> {
       axios({method:'get',url:'http://47.100.113.55:8080/th/data/node/tree'}).then(function(response) { dispatch(getInfo(response.data))}); 
   }
}
export const   getLineInfo=(node,year,month)=>{
    return(dispatch)=> {
         var url1='http://47.100.113.55:8080/th/avg/'+node+'/'+year+'/'+month+'/';
         console.log(url1)
        axios({method:'get',url:url1}).then(function(response) {  dispatch(getUserInfoList(response))}); 
    }
}



