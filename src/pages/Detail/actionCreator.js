
import {CHANGE_INFO,GET_INFO} from './actionTypes'
import axios from 'axios'
axios.defaults.withCredentials = true;
export const getChangeListAction=(list)=>({
    type: CHANGE_INFO,
    value:list

})

export const getInfo=(list)=>({
     type:GET_INFO,
     value:list

})

export const getNodeInfo=()=>{
    return(dispatch)=> {
        axios({method:'get',url:'http://47.100.113.55:8080/th/data/node/tree'}).then(function(response) { dispatch(getChangeListAction(response.data))}); 
    }
}

export const searchInfo=(value)=>{
    return(dispatch)=>{
       dispatch(getInfo(value))
    }
}