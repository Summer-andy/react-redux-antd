import {GET_USERINFO} from './actionTypes'
import axios from 'axios'
axios.defaults.withCredentials = true;
export const getUserInfoList=(list)=>({
    type:GET_USERINFO,
    value:list
})

export const   getUserInfo=()=>{
    return(dispatch)=> {
        axios({method:'post',url:'http://47.100.113.55:8080/th/data/units/simple'}).then(function(response) { dispatch(getUserInfoList(response.data))}); 
    }
}