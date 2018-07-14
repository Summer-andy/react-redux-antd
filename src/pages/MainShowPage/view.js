import React,{Component} from 'react'
import {connect} from 'react-redux'
// import { bindActionCreators} from 'redux'
// import * as actions from './actionCreator'
import styles from './style.mcss'
import { List, Avatar ,Timeline,Carousel,notification, Icon} from 'antd';
import  './cansor.css'
import imgURL1 from '../../static/img/爱心.png'
import imgURL2 from '../../static/img/云数据.png'
import imgURL3 from '../../static/img/太阳.png'
import imgURL4 from '../../static/img/水.png'
import imgURL11 from '../../static/img/1.jpg'
import imgURL22 from '../../static/img/2.jpg'
import imgURL33 from '../../static/img/3.jpg'
import imgURL44 from '../../static/img/4.jpg'

const data = [
    {
      title: '系统管理员',
    },
    {
      title: '系统管理员',
    },
    {
      title: '系统管理员',
    },
    {
      title: '系统管理员',
    }
  ]
class MainShowPage extends Component{
render(){
   return(
       <div >

     

          <div className={styles.info}>
          <ul>
               <li>
                   <div className={styles.humiderLineShow}>
                          <img src={imgURL1} alt="收藏" />  
                          <lable>使用人数</lable>    
                          <br />
                          <b style={{fontSize:20}}>12</b>
                   </div>
              </li>
               <li>
                  <div className={styles.temperLineShow}>
                      <img src={imgURL2} alt="云数据" />  
                      <lable>云数据</lable>    
                      <br />
                      <b style={{fontSize:20}}>20020</b>
                  </div>
              </li>
              <li>
                   <div className={styles.humiderLineShow}>
                   <img src={imgURL3} alt="温度" />  
                   <lable>平均气温</lable>    
                   <br />
                   <b style={{fontSize:20}}>34</b>
                    </div>
               </li>
                <li>
                   <div className={styles.temperLineShow}>
                   <img src={imgURL4} alt="水" />  
                   <lable>平均湿度</lable>    
                   <br />
                   <b style={{fontSize:20}}>50</b>
                   </div>
               </li>
          </ul>
        </div>
         <div className={styles.message}>
         
         <List
         itemLayout="horizontal"
         dataSource={data}
         renderItem={item => (
           <List.Item>
             <List.Item.Meta
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title={<a href="https://ant.design">{item.title}</a>}
               description="系统管理员将会此处发布系统更新维护信息等"
             />
           </List.Item>
         )}
       />
         </div>
         <div className={styles.date}>
              
              <b>系统运行日志</b>
              <br/>
              <br />
         <Timeline>
         <Timeline.Item color="green">系统第一次上线 2017-09-01</Timeline.Item>
         <Timeline.Item color="green">系统第一次开始正式正常运行 2017-09-01</Timeline.Item>
         <Timeline.Item color="red">
           <p>解决了节点网关树形显示的问题 2017-12-01</p>
           <p>解决网关节点启动不了的问题 2017-12-06</p>
         </Timeline.Item>
         <Timeline.Item>
           <p>新功能测试中 2018-06-01</p>
         </Timeline.Item>
         </Timeline>
         </div>
         <br />
         <div className={styles.userNum}>
         <Carousel autoplay>
         <div> <img src={imgURL11} alt='123' /></div>
         <div><img src={imgURL22} alt='123' /></div>
         <div><img src={imgURL33} alt='123'/></div>
         <div><img src={imgURL44} alt='123'/></div>
       </Carousel>

         </div>
       </div>
   )

 
}  
componentDidMount(){
    notification.open({
        message: '登录信息',
        description: '您好，很开心又见到你啦.',
        icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
      });
   }
}


export default connect(null,null)(MainShowPage)
