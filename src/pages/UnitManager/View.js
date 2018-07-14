import React, { Component } from 'react';
import {connect}  from 'react-redux'
// import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import { Table } from 'antd';

const columns = [{
    title: '单位名称',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '单位地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '联系人',
    dataIndex: 'person',
    key: 'person',
  }, {
    title: '手机号码',
    dataIndex: 'phone',
    key: 'phone',
  }, {
    title: '电子邮件',
    dataIndex: 'email',
    key: 'email',
  }];
  
  
class User extends Component{
    render(){
        return(
          <div  style={{width:1100}}>
          {
            console.log(this.props)
          }
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
    ...state.unitsinfo
}
}

const mapDispatch=(dispatch)=>{
  return{
    actions:bindActionCreators(actions,dispatch)   
}
}

export default connect(mapState,mapDispatch)(User)