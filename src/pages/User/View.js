import React, { Component } from 'react';
import {connect}  from 'react-redux'
// import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import { Table} from 'antd';

const columns = [{
    title: '用户姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '用户登录名',
    dataIndex: 'username',
    key: 'username',
  }, {
    title: '单位',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '用户类型',
    dataIndex: 'userType',
    key: 'userType',
  }, {
    title: '备注',
    dataIndex: 'memo',
    key: 'memo',
  }];
  
  
class User extends Component{
    render(){
        return(
          <div style={{width:775}}>
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
    ...state.userinfo
}
}

const mapDispatch=(dispatch)=>{
  return{
    actions:bindActionCreators(actions,dispatch)   
}
}

export default connect(mapState,mapDispatch)(User)