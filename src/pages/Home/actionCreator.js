import {CHANG_LIST,CHANG_LOGIN} from './actionTypes'
import {browserHistory} from 'react-router'
export const getChangeListAction=(list)=>({
  
    type: CHANG_LIST,
    value:list

})

export const getChangeLoginAction=(data)=>({
    type:CHANG_LOGIN,
    value:data
})

export const getActionList=()=>{
    return(dispatch)=>{
        fetch('/api/home.json').then((res) => res.json())
        .then((res)=>{
            dispatch(getChangeListAction(res.data))
         })
    }
}

export const getActionLoign=()=>{
 return(dispatch)=>{
     browserHistory.push('detail1')
     dispatch(getChangeListAction(200))
 }
}