import {GETGATEWAYNODEINFOCHARGE,GETCHILD,DELETE,SHOWMODAL,DISPLAYMODAL,ADD,MODIFY} from './actionTypes'
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

export const commonDelete=(list)=>({
    type:DELETE,
    value:list,
})

export const commonShowAddModal=()=>({
    type:SHOWMODAL,
    visible:true
})

export const commonDisplayAddModal=()=>({
    type:DISPLAYMODAL,
    visible:false,
    modifyVisible:false
})

export const addNodeList=()=>({
         type:ADD,
         dataList:true
})

export const handlemodify=()=>({
    type:MODIFY,
    modifyVisible:true
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

export const deleteNode=(value)=>{
  return(dispatch)=>{
       var url='http://47.100.113.55:8080/th/manage/node/'+value;
       axios({method:'delete',url:url}).then(function(response){dispatch(commonDelete(response.data))})
  }
}
export const  addNodeModal=()=>{
    return(dispatch)=>{
       dispatch(commonShowAddModal())
    }
}

export const displayNodeModal=()=>{
    return(dispatch)=>{
   dispatch(commonDisplayAddModal())
    }
}

export const addNode=(getwayId,nodeNum,nodeStatus)=>{
    return(dispatch)=>{
        var params=new URLSearchParams();
        params.append('nodeMark',nodeNum)
        params.append('staus',nodeStatus)
        params.append('type',1)
        params.append('getwayId',getwayId)
        axios({method:'post',url:'http://47.100.113.55:8080/th/manage/node',data:params}).then(function(response) { 
            if(response.data.code===1){
                dispatch(addNodeList())
            }
        }); 
    }
}

export const handleModify=()=>{
    return(dispatch)=>{
          dispatch(handlemodify())
    }
}