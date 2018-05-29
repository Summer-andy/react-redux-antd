import React, { Component } from 'react';
import {connect}  from 'react-redux'
// import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import { Table } from 'antd';

const columns = [{
    title: '报修ID',
    dataIndex: 'repairId',
    key: 'repairId',
  }, {
    title: '报修节点盒子号',
    dataIndex: 'nodeMark',
    key: 'nodeMark',
  }, {
    title: '故障描述',
    dataIndex: 'faultDesc',
    key: 'faultDesc',
  }, {
    title: '联系人',
    dataIndex: 'person',
    key: 'person',
  }, {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
  }, {
    title: '处理结果',
    dataIndex: 'status',
    key: 'status',
  }
  , {
    title: '报修时间',
    dataIndex: 'repairTime',
    key: 'repairTime',
  }];
  
  
class User extends Component{
    render(){
        return(
          <div  style={{width:775}}>
            <Table columns={columns} dataSource={this.props.rows} />
            </div>
        )
    }

  componentDidMount(){
         this.props.actions.getUserInfo();
  }

}

const mapState=(state)=>{
  return{
    ...state.repairsinfo
}
}

const mapDispatch=(dispatch)=>{
  return{
    actions:bindActionCreators(actions,dispatch)   
}
}

export default connect(mapState,mapDispatch)(User)