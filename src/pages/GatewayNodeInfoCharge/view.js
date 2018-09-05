import React, {Component} from 'react';
import {connect} from 'react-redux'
// import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators} from 'redux'
import {Table,Popconfirm,message,Modal,Button,Input,Select,Icon} from 'antd';
import $ from 'jquery';
const Option = Select.Option;
var getwayId='';
var nodeNum='';
var nodeStatus='';

function Success(){
   message.success('操作成功')
}
class GatewayNodeInfoCharge extends Component {
  showModal = () => {
     this.props.actions.addNodeModal();
  }
  handleOk = (e) => {
 this.props.actions.addNode(getwayId,nodeNum,nodeStatus);
Success();
  this.props.actions.displayNodeModal();
  }
 
  handleCancel = (e) => {
  this.props.actions.displayNodeModal();

  }
  
  render() {
    const columns = [
      {
        title: '网关号ID',
        dataIndex: 'getwayId',
        key: 'getwayId'
      }, {
        title: '网关状态',
        dataIndex: 'status',
        key: 'status',
        width: '12%'
      },{
        title:'网关号码',
        dataIndex:'getwayMark',
        key:'getwayMark'
      },{
        title:'状态描述',
        dataIndex:'statusDesc',
        key:'statusDesc'
      },{
        title:'温度',
        dataIndex:'temper',
        key:'temper'
      },{
        title:'湿度',
        dataIndex:'humidity',
        key:'humidity'
      }
    ];
    const columnschild = [
      {
        title: '节点编码',
        dataIndex: 'nodeMark',
        key: 'nodeMark'
      }, {
        title: '节点号',
        dataIndex: 'getwayId',
        key: 'getwayId',
        width: '12%'
      },{
        title:'节点号码',
        dataIndex:'nodeNum',
        key:'nodeNum'
      },{
        title:'当前温度',
        dataIndex:'nowHumidity',
        key:'nowHumidity'
      },{
        title:'当前湿度',
        dataIndex:'nowTemper',
        key:'nowTemper'
      },{
        title:'备注',
        dataIndex:'memo',
        key:'memo'
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

    for (var i = 0; i < this.props.rows.length; i++) {
      this.props.rows[i]['key'] = i
    }
    for (var j = 0; j < this.props.data.rows.length; j++) {
      this.props.data.rows[j].key = 4 * j;
    }
    const data = this.props.rows
    const datachild=this.props.data.rows
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
      onSelect: (record, selected, selectedRows) => {
        getwayId=record.getwayId;
        this.props.actions.getChildInfo(record.getwayMark);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
    
      }
    };

    return (
      <div style={{marginLeft:50}}>
            <h1 style={{textAlign:"center",fontSize:20}}>网关信息展示 </h1>
        <Table  columns={columns} rowSelection={rowSelection} dataSource={data}/>
        <br/>
        <h1 style={{textAlign:"center",fontSize:20}}>节点信息展示 </h1>
        <Button  type="primary" onClick={this.showModal}>增加节点</Button>
        <Table   pagination={{ pageSize:5}}  columns={columnschild} rowSelection={rowSelection} dataSource={datachild}/>
        <Modal
        title="增加节点信息"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
       <span>节点盒子号码：</span>
       <br />
       <br />
       <Input placeholder="此处输入节点盒子号码" onChange={this.handleNodeNumberChange}/>
       <br />
       <br />
       <span>节点状态：</span>
       <br />
       <br />
       <Select defaultValue="在线" style={{ width: 120 }} onChange={this.handleNodeStatusChange}>
       <Option value="1">在线</Option>
       <Option value="0">不在线</Option>
      </Select>  
      </Modal>

      <Modal
      title="修改节点信息"
      visible={this.props.modifyVisible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
     <span>节点盒子编码：</span><Input ref="nodeBoxNum" placeholder="此处输入节点盒子号码" onChange={this.handleNodeNumberChange}/>
     <br />
     <br />
     <span>节点号码：</span><Input ref="nodeNum" placeholder="此处输入节点号码" />
     <br />
     <br />
     <span>当前温度：</span><Input ref="temperature" placeholder="此处输入节点的温度" />
     <br />
     <br />
     <span>当前湿度：</span><Input ref="humidity" placeholder="此处输入节点的湿度" />
     <br />
     <br />
     <span>备注：</span><Input ref="memo" placeholder="此处输入节点信息的备注" />
    </Modal>

      </div>
    )
  }



  handleNodeNumberChange = (e) => {
        nodeNum=e.target.value;
  }
  
  handleNodeStatusChange = (value) => {
      nodeStatus=value
  }

  onDelete = (value) => {
         this.props.actions.deleteNode(value);
        Success();
  }

  modify = (value) => {
        this.props.actions.handleModify();
        console.log(value);
        let _this=this;
        var dtd=$.Deferred();
        var wait = function(dtd){  
          　　　　var tasks = function(){  
          　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态  
          　　　　};  
          　　　　setTimeout(tasks,400);  
          　　　　return dtd.promise(); // 返回promise对象,promise对象只开放与状态无关的方法，即那三种状态方法不开放，无法设置  
          　　};  
          var d=wait(dtd)
          $.when(d).done(function(){  
            _this.refs.nodeBoxNum.input.value=value.nodeMark;
            _this.refs.nodeNum.input.value=value.nodeNum;
            _this.refs.temperature.input.value=value.nowTemper;
            _this.refs.humidity.input.value=value.nowHumidity;
            _this.refs.memo.input.value=value.memo;
          } )
  }

 

  componentDidMount() {
    this.props.actions.getGateNodeInfo();
  }

}

const mapState = (state) => {
  return {
    ...state.gatenode
  }
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }

}

export default connect(mapState, mapDispatch)(GatewayNodeInfoCharge)