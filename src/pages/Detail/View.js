import React, { Component } from 'react';
import {connect}  from 'react-redux'
import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import axios from 'axios'
import { Select,  DatePicker,Button,Table} from 'antd';
const { Option, OptGroup } = Select;
const {  RangePicker } = DatePicker;
var  nodenum='';  //暂时存放节点值得变量
const columns = [{
    title: '网关盒子ID',
    dataIndex: 'nodeMark',
    key: 'nodeMark',

  }, {
    title: '温度',
    dataIndex: 'temper',
    key: 'temper',
  }, {
    title: '湿度',
    dataIndex: 'humidity',
    key: 'humidity',
  }, 
  {
    title: '上报时间',
    dataIndex: 'reportTime',
    key: 'reportTime',
  }];

  function onOk(value) {

  }

  axios.defaults.withCredentials = true;
 class   Detail extends Component{ 
    render(){
        return(
            <div className={styles.container}>
                 <div>
                 <label style={{marginLeft:30}}>节点号：</label>
                 <Select
                 defaultValue="GW001-00007-9"
                 style={{ width: 200 }}
                 onChange={this.handleChange}
               >
         {
             this.props.value.map((value,index)=>{
                 return(
                    <OptGroup key={index} label={value.parentId}>
                  {
                      value.subIds.map((value,index)=>{
                          return(
                            <Option key={index} value={value}>{value}</Option>
                          )
                      })
                  }
                  </OptGroup>
                 )
             })
         }
               </Select>
              <label style={{ marginLeft:20}}>上报时间：</label>
              <RangePicker
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              placeholder={['Start Time', 'End Time']}
           
              onOk={onOk}
            />
                  <Button type="primary" style={{marginLeft:20 }} icon="search" onClick={this.search}>搜索</Button>
                  <Button type="primary" style={{marginLeft:20 }} shape="circle" icon="download" size='default' />
                 </div> 
                 <br/>
                 <div className={styles.pic}>
                 <Table columns={columns} dataSource={this.props.rows} />
                 </div>
            </div>
        )
    }

    handleChange=(value)=>{
      console.log(`selected ${value}`);
      nodenum=`${value}`
    }

    componentDidMount(){
    this.props.actions.getNodeInfo();
    }

    search=()=>{
       var params=new URLSearchParams();
       console.log(nodenum)
       params.append('nodeMark',nodenum);
       params.append('startTime','2012-05-23 02:03');
       params.append('endTime','2018-05-16 02:03');
       params.append('page',1);
       params.append('rows',300)
       var _this=this;
    axios({
          method:'POST',
          url:'http://47.100.113.55:8080/th/query/th/reportTime',
          data:params
    }).then(function(response){  
      _this.props.actions.searchInfo(response.data)
    })
    }
    
}

const mapState= (state)=>{  

 return{
     ...state.detail
 }
}

const mapDispatch = (dispatch)=>{
    return{
            actions:bindActionCreators(actions,dispatch)   
        }
}

export default connect(mapState,mapDispatch)(Detail)