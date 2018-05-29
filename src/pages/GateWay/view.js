import React ,{Component}  from 'react'
import {connect}  from 'react-redux'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import Highcharts from 'highcharts';
import ReactHighcharts from "react-highcharts";
import Drilldown from 'highcharts-drilldown';
import { Select,Button} from 'antd';
import styles from './style.mcss';
const { Option, OptGroup } = Select;
Drilldown(Highcharts);
var year=[];
var  data=[];
var data1=[]
var submitNode='';
var submitYear='';
var submitMonth='';

class  GateWays  extends Component{
  render(){ 
    console.log(this.props)
     for(var i=0;i<this.props.data.length;i++){
            year.push(this.props.data[i].reportTime);
            data.push(this.props.data[i].temperAvg)
            data1.push(this.props.data[i].humidityAvg)
  }
   const config={
     title:{
       text:'温湿度曲线图'  
         },
    xAxis: {
      categories: year
  },
  series: [{
    name:'温度',
      data:data
  },{
    name:'湿度',
    data:data1
}]
   }
    return(
      <div  style={{marginLeft :95}} className={styles.content}>
      <label>节点号:</label>
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
    <label>查询年份:</label>
    <Select defaultValue="2015" style={{ width: 120 }} onChange={this.handleChange2}>
    <Option value="2018">2018</Option>
    <Option value="2017">2017</Option>
    <Option value="2016" >2016</Option>
    <Option value="2015">2015</Option>
    </Select>
  <label>查询月份:</label>
  <Select defaultValue="1" style={{ width: 120 }} onChange={this.onChange}>
  <Option value="">取消</Option>
  <Option value="1">1</Option>
  <Option value="2">2</Option>
  <Option value="3">3</Option>
  <Option value="5">5</Option>
  <Option value="6">6</Option>
  <Option value="7">7</Option>
  <Option value="8">8</Option>
  <Option value="9">9</Option>
  <Option value="10">10</Option>
  <Option value="11">11</Option>
  <Option value="12">12</Option>
  </Select>
  <Button type="primary" icon="search" onClick={this.search}>查询</Button>
    <br/>
    <br />
      <ReactHighcharts config={config}></ReactHighcharts>
      </div>
    )
  }

  onChange=(value)=>{
    console.log(`selected ${value}`)
    submitMonth=`${value}`
  }

  handleChange=(value)=>{
    console.log(`selected ${value}`)
    submitNode=`${value}`;
  }

  handleChange2=(value)=>{
    console.log(`selected ${value}`)
    submitYear=`${value}`;
  }

  search=()=>{
    this.props.actions.getLineInfo(submitNode,submitYear,submitMonth);
  }

  componentDidMount(){
    this.props.actions.getNodeInfo();
  }

  componentDidUpdate(){
    data=[];
    data1=[];
  }
  
}

  const mapState=(state)=>{
    return{
      ...state.line
  }
  }
  
  const mapDispatch=(dispatch)=>{
    return{
      actions:bindActionCreators(actions,dispatch)   
  }
  }




  export default connect(mapState,mapDispatch)(GateWays)


  
