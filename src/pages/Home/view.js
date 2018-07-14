import React, { Component } from 'react';
import { Form, Icon, Input, Button,message } from 'antd';
import {connect}  from 'react-redux'
import * as actions from './actionCreator'
import { bindActionCreators} from 'redux'
import styles from './style.mcss'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
const FormItem = Form.Item;
  class Home extends Component{
    constructor(props)
    {
  super(props);
  this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      var _this=this;
      this.props.form.validateFields((err, values) => {
        if (!err) {
 
            axios({method:'post',url:'http://139.196.82.33:3000/login/cellphone?password='+values.password+'&phone='+values.userName
            }).then(function(response){
              console.log(response)
              if(response.data.code===502){
            _this.props.actions.getActionLoign();
              }
              else{
                message.error('密码错误,请重新填写!');
              }
            })
        }
      });
    }
  render(){
       const { getFieldDecorator } = this.props.form;
       console.log(this.props.list)
       return(
           <div className={styles.content}>
             
           <Form onSubmit={this.handleSubmit} className={styles.loginform}>
            <h1>网易智能小瓜系统</h1>
           <FormItem>
             {getFieldDecorator('userName', {
               rules: [{ required: true, message: 'Please input your username!' }],
             })(
               <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
             )}
           </FormItem>
           <FormItem>
             {getFieldDecorator('password', {
               rules: [{ required: true, message: 'Please input your Password!' }],
             })(
               <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
             )}
           </FormItem>
           <FormItem>
             <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
              登录
             </Button>
           </FormItem>
         </Form>

           </div>
       )
  }

}

const mapStateToProps=(state)=>{
 return{
   list:state
 }
}

const mapDispatchToProps = (dispatch) => {
    return {
 actions:bindActionCreators(actions,dispatch)
    }
}

const WrappedNormalLoginForm = Form.create()(Home);

export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);