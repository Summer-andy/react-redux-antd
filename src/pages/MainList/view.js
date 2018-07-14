import React ,{ Component}  from 'react'
import { Menu, Icon, Avatar, Dropdown } from 'antd'
import {connect}  from 'react-redux'
import {browserHistory} from 'react-router'
import * as actions from './actionCreator'
import { bindActionCreators} from 'redux'
import styles from './style.mcss'
const SubMenu = Menu.SubMenu;
const exitt = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://139.196.82.33">退出</a>
    </Menu.Item>
  </Menu>
);
 class MainList extends Component{
   render(){
      
       return(   
         <div>
        
        <div className={styles.bg}>  
        <div  className={styles.leftnav} >
       <br/>
       <div className={styles.leaftnavtop}>
        <Avatar  className={styles.header} size="large" icon="github" />
        <br />
  <b style={{fontSize:20,color:'black'}}>智能小瓜系统</b>
    </div>
       <br/>
       <br/>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1','sub2']}
        mode="inline"
        theme="light"
        inlineCollapsed={this.props.list}
      >
      <Menu.Item key="0">
      <Icon type="laptop" />
      <span onClick={this.goMainPage}>首页</span>
    </Menu.Item>
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

        <Menu.Item key="4">
            <Icon type="smile-o" />
            <span onClick={this.memorandum}>放松倾听</span>
       </Menu.Item>

        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>网关节点管理</span></span>}>
          <Menu.Item key="5"><span onClick={this.lookGateNode}>网关节点的信息维护</span></Menu.Item>
        </SubMenu>
        
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>系统管理</span></span>}>
        <Menu.Item key="8" ><span onClick={this.userinfo}>用户管理</span></Menu.Item> 
        <Menu.Item key="9"><span onClick={this.unitinfo}>单位管理</span></Menu.Item>
        <Menu.Item key="10"><span onClick={this.repairsinfo}>报修信息管理</span></Menu.Item>
        </SubMenu>
      </Menu>
        </div>
          <div  className={styles.rightnav}>
            <div className={styles.topnav}>
          <Icon style={{float:'left',fontSize: 25,marginLeft:'3%',cursor:'pointer'}} onClick={this.toggleCollapsed} type={ this.props.list ? 'menu-unfold' : 'menu-fold' } />
            <Dropdown overlay={exitt}>
            <span style={{marginLeft:'80%'}}>小瓜,欢迎你！</span>
          </Dropdown>
              </div>
        <br/>
                   <div className={styles.rightbody}>
                  {
                      this.props.children
                  }    
                  </div>    
          </div>
        </div>
        </div>
       )
   }

   goMainPage=()=>{
    browserHistory.push('/detail1')
   }
  searchTemperhi=()=>{
    browserHistory.push('/temperhumider')
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
  memorandum=()=>{
    browserHistory.push('/memorandum')
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