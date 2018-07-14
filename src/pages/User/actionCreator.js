import {GET_USERINFO,SHOWORNOT,ADDRESULT} from './actionTypes'
import axios from 'axios'

export const getUserInfoList=(list)=>({
    type:GET_USERINFO,
    value:list,
})

export const dialogShowOrNot=(status)=>({
    type:SHOWORNOT,
    visible:status
})

export const addUserInfoResult=(result)=>({
    type:ADDRESULT,
    result:result
})

export const   getUserInfo=()=>{
    return(dispatch)=> {
        axios({method:'post',url:'http://47.100.113.55:8080/th/data/users',withCredentials :true}).then(function(response) { dispatch(getUserInfoList(response.data))}); 
    }
}

export const searchUserInfo=(searchKey)=>{
    return(dispatch)=>{
        if(searchKey !== ''){
             axios({method:'post',url:'http://47.100.113.55:8080/th/search/user/'+searchKey,withCredentials :true}).then(function(response) {dispatch(getUserInfoList(response.data)) }); 
        }
        else{
            axios({method:'post',url:'http://47.100.113.55:8080/th/data/users',withCredentials :true}).then(function(response) { dispatch(getUserInfoList(response.data))}); 
        }
       
    }
}

export const addUserInfo=()=>{
    return(dispatch)=>{
           dispatch(dialogShowOrNot(true))
    }
}

export   const CancerlAddUserInfo=()=>{
    return(dispatch)=>{
        dispatch(dialogShowOrNot(false))
 }
}


export const addUser=(IDname,username,password,unit,type,memo)=>{
    return(dispatch)=>{
        var params=new URLSearchParams();
        params.append('username',username)
        params.append('name',IDname)
        params.append('title',username)
        params.append('userType',type)
        params.append('password',password)
        params.append('password2',password)
        params.append('memo',memo)
        axios({method:'post',url:'http://47.100.113.55:8080/th/system/user',withCredentials :true,data:params}).then(function(response) {
        if(response.code===1){
                      dispatch(addUserInfoResult(true))
               }else{
                dispatch(addUserInfoResult(false))
               }
         });        
    }
}