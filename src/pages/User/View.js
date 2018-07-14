import React, { Component } from 'react';
import {connect}  from 'react-redux'
import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import {Table,Popconfirm,Icon,Input,Button,Modal,Select} from 'antd';

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
  },{
    title:'操作',
    key:'getwayId2',
    dataIndex:'getwayId',
    render:(text,record)=> 
    <div>
    <Popconfirm title="确认删除嘛?" onConfirm={() => this.onDelete(record.nodeMark)}>
    <Icon style={{cursor:'pointer'}} type="delete" />---
  </Popconfirm>
  <Popconfirm title="确认修改嘛?" onConfirm={() => this.modify(record)}>
  <Icon style={{cursor:'pointer'}} type="edit" />
</Popconfirm>
</div>
  }
];
const Option = Select.Option;
   let IDname='';
   let username='';
   let password='';
   let  unit='';
   let type='';
   let memo='';
  
class User extends Component{
    render(){
        return(
          <div style={{width:1100}} className={styles.container}>
          <lable>用户名:</lable> 
          <Input  ref="username"  placeholder="Enter your username" onChange={this.usernameOnchange} style={{ width:200,'padding-right':20}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
          <Button type="primary" shape="circle" icon="search" onClick={this.searchUserinfo} />
          <Button type="danger" style={{float:'right'}} onClick={this.addUser}>添加用户</Button>
          <br />  
          <br />
          <Table columns={columns} dataSource={this.props.rows} />
          <Modal
          title="增加新用户"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <lable>您的真实姓名：</lable>
     <Input placeholder="输入用户真实名字" onChange={this.changeUsename}  style={{width:200}} />
     <br />
     <br />
     <lable>您的登录账号：</lable>
     <Input placeholder="输入用户登陆名" onChange={this.changeRide}   style={{width:200}} />
     <br />
     <br />
     <lable>您的登录密码：</lable>
     <Input placeholder="输入用户登录密码"  onChange={this.changePassword}  style={{width:200}} />
     <br />
     <br />
     <lable>您的工作单位：</lable>
     <Input placeholder="输入用户的工作单位"  onChange={this.changeUnit}  style={{width:200}} />
     <br />
     <br />
     <lable>您的身份类型：</lable>
     <Select  onChange={this.changeType} defaultValue="普通测试人员"  style={{width:200}} >
     <Option value="0">系统管理员</Option>
     <Option value="1">特权单位管理员</Option>
     <Option value="2" >单位管理员</Option>
     <Option value="3">普通测试人员</Option>
     </Select>
     <br />
     <br />
     <lable>您的信息备注：</lable>
     <Input placeholder="输入用户的信息备注" onChange={this.changeMemo}  style={{width:200}} />
        </Modal>
            </div>
        )
    }
 
  componentDidMount(){
         this.props.actions.getUserInfo();       
  }

   usernameOnchange=(e)=>{
       console.log(e.target.value)
   }
   searchUserinfo=()=>{
    this.props.actions.searchUserInfo(this.refs.username.input.value);
   }
   
   handleCancel=()=>{
    this.props.actions.CancerlAddUserInfo();
   }
   addUser=()=>{
     this.props.actions.addUserInfo();
   }
   changeUsename=(e)=>{
              IDname=e.target.value
    }
  changeRide=(e)=>{
           username=e.target.value;
    }
  changePassword=(e)=>{
             password=e.target.value
    }
  changeUnit=(e)=>{
              unit=e.target.value
    }
  changeType=(e)=>{
              type=`${e}`
    }
  changeMemo=(e)=>{
              memo=e.target.value
   }
handleOk=()=>{
       this.props.actions.addUser(IDname,username,password,unit,type,memo);
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