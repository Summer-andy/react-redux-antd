import {GETGATEWAYNODEINFOCHARGE,GETCHILD} from './actionTypes'
import axios from 'axios'
axios.defaults.withCredentials = true;
export const getGateNodeInfoList=(list)=>({
    type:GETGATEWAYNODEINFOCHARGE,
    value:list
})

export const  getChild=(list)=>({
         type:GETCHILD,
         value:list
}) 

export const   getGateNodeInfo=()=>{
    return(dispatch)=> {
        axios({method:'post',url:'http://47.100.113.55:8080/th/data/getways/simple'}).then(function(response) {  dispatch(getGateNodeInfoList(response.data))}); 
    }
}

export const   getChildInfo=(value)=>{
    return(dispatch)=> {
        var url='http://47.100.113.55:8080/th/data/getway/'+value+'/subNodes'
        axios({method:'post',url:url}).then(function(response) { dispatch(getChild(response))}); 
    }
}