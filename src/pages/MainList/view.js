import React ,{ Component}  from 'react'
import { Menu, Icon, Button,Avatar } from 'antd'
import {connect}  from 'react-redux'
import {browserHistory} from 'react-router'
import * as actions from './actionCreator'
import { bindActionCreators} from 'redux'
import styles from './style.mcss'
const SubMenu = Menu.SubMenu;
 class MainList extends Component{
   render(){
      
       return(   
         <div>
        
        <div className={styles.bg}>  
        <div style={{ marginLeft:'-15%'}} className={styles.content} >
       <br/>
        <Avatar style={{marginLeft:20}} className={styles.header} size="large" icon="github" />
       <br/>
       <br/>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1','sub2']}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.props.list}
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span onClick={this.searchTemperhi}>查询温湿度</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span onClick={this.searchLine}>查询历史温度曲线</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>查询异常</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>网关节点管理</span></span>}>
          <Menu.Item key="5"><span onClick={this.lookGateNode}>网关节点的信息维护</span></Menu.Item>
          <Menu.Item key="6">实时信息和控制</Menu.Item>
          <Menu.Item key="7">网关租用授权管理</Menu.Item>
        </SubMenu>
        
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>系统管理</span></span>}>
        <Menu.Item key="8" ><span onClick={this.userinfo}>用户管理</span></Menu.Item> 
        <Menu.Item key="9"><span onClick={this.unitinfo}>单位管理</span></Menu.Item>
        <Menu.Item key="10"><span onClick={this.repairsinfo}>报修信息管理</span></Menu.Item>
        <Menu.Item key="11">网关节点的信息维护</Menu.Item>
          <Menu.Item key="12">实时信息和控制</Menu.Item>
          <Menu.Item key="13">网关租用授权管理</Menu.Item>
        </SubMenu>
      </Menu>
        </div>
          <div style={{ marginLeft:8 ,width:950}} className={styles.content}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ width:950,height:60}}>
          <Icon style={{float:'left'}} type={ this.props.list ? 'menu-unfold' : 'menu-fold' } />
          <Avatar className={styles.exit} size="small" icon="user" style={{ float:'right'}} />
          <span style={{float:'right'}}>小瓜</span>
        </Button>
        <br/>
        <br/>
        <br/>
                  {
                      this.props.children
                  }        
          </div>
        </div>
        </div>
       )
   }
  searchTemperhi=()=>{
    browserHistory.push('/detail1')
  }
  
  searchLine=()=>{
    browserHistory.push('/line')
  }
  componentDidMount() {
      this.props.actions.getMain()
  }
  toggleCollapsed=()=>{
      this.props.actions.changeShow()
  }
  userinfo=()=>{
    browserHistory.push('/userinfo')
  }
  unitinfo=()=>{
    browserHistory.push('/unitinfo')
  }
  repairsinfo=()=>{
    browserHistory.push('/repairsinfo')
  }
  lookGateNode=()=>{
    browserHistory.push('/gatenode')
  }

}

const mapStateToProps = (state) => {
    return {list: state.mainlist.list}
}

const mapDispatchToProps = (dispatch) => {
    return {
       actions:bindActionCreators(actions,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainList);