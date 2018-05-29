import React, {Component} from 'react';
import {connect} from 'react-redux'
// import styles from './style.mcss'
import * as actions from './actionCreator'
import {bindActionCreators} from 'redux'
import {Table,Popconfirm} from 'antd';

class GatewayNodeInfoCharge extends Component {
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
      ,{
        title:'操作',
        key:'action',
        dataIndex:'action',
        render:()=><a href="">删除</a>
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
        dataIndex:'getwayId2',
        render:(text,record)=> 
        <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
        <a href="">删除</a>
      </Popconfirm>
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
        console.log(record);
        this
          .props
          .actions
          .getChildInfo(record.getwayMark);
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
        <Table    columns={columnschild} rowSelection={rowSelection} dataSource={datachild}/>
      </div>
    )
  }
  onDelete=(value)=>{
   console.log(value)
  }
  componentDidMount() {
    this
      .props
      .actions
      .getGateNodeInfo();
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