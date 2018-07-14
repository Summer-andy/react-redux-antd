import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './actionCreator'
import {bindActionCreators}  from 'redux'
import styles from './style.mcss'
import './style1.css'
import {Input,Tag,List, Avatar,Pagination,Tabs,Card,Icon,Carousel} from 'antd';
const Search = Input.Search;
const TabPane = Tabs.TabPane;
var musicName='';
var musicId='';
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class Memorandun extends Component {
      render(){

        var list = (length,url1) => {
          var res = [];
          for(var i = 0; i < length; i++) {
            res.push(<img  key={i} src={url1[i].picUrl} alt=""/>)
          }
          return res
        }

            return (
                  <div>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                  <TabPane tab="歌曲搜索" key="1">
                  <Carousel autoplay>
                 {
                   list(this.props.banners.banners.length,this.props.banners.banners)
                 }
                  </Carousel>
                    <div className={styles.search}>
                       <Search
                       placeholder="请输入您的freestyle!"
                       onSearch={value=>this.searchSong(value)}
                       enterButton
                       />
                                 <div className={styles.tags}>
                                      <Tag color="#f50">方向</Tag>
                                      <Tag color="#2db7f5">林俊杰</Tag>
                                      <Tag color="#87d068">毛不易</Tag>
                                      <Tag color="#108ee9">周杰伦</Tag>
                                 </div>
                       </div>
                        <div className={styles.player}>
                        <List
                          itemLayout="horizontal"
                          dataSource={this.props.value.songs}
                          renderItem={item => (
                                   <List.Item onClick={()=>this.play(item.id)} >
                                   <List.Item.Meta
                                       avatar={<Avatar src={item.artists[0].img1v1Url} />}
                                        title={item.name}
                                                     description={item.album.name}
                                                 />
                                      </List.Item>)} />
                        </div>  
                        <Pagination simple defaultCurrent={1} total={50} onChange={this.onChangePage} />
                  </TabPane>
                  <TabPane tab="精品歌单" key="2">
                  <List
                  grid={{ gutter: 12, column: 3 }}
                  dataSource={this.props.listvalue.playlists}
                  renderItem={item => (
                    <List.Item>
                      <Card title={item.name} cover={<img  alt="" src={item.coverImgUrl}/>}>
                      <Avatar src={item.creator.avatarUrl} />
                      <br />
                      {item.creator.nickname}
                      </Card>
                    </List.Item>
                  )}
                />
                  { console.log(this.props)}
                  </TabPane>
                    <TabPane tab="音乐播放" key="3">
                      <div className={styles.musicPlay}>
                         <audio  autoPlay="autoplay" src={this.props.mp3Id}></audio>
                      </div>
                      <div className={styles.musicContent}>
                      <List
                      bordered="true"
                      itemLayout="horizontal"
                      dataSource={this.props.commentId.comments}
                      renderItem={item => (
                               <List.Item onClick={()=>this.likes(item.commentId)}
                               actions={[<IconText type="like-o" text={item.likedCount} />, <IconText onClick={this.addCommand}  type="message" text=" " />]}
                               >
                               <List.Item.Meta
                                   avatar={<Avatar src={item.user.avatarUrl} />}
                                   title={item.user.nickname}
                                   description={item.content}
                                             />
                                  </List.Item>)} />
                      <Pagination simple defaultCurrent={1} total={50} onChange={this.onChangePage2} />
                      </div>
                    </TabPane>
                </Tabs>
                {console.log(this.props) }
                </div>
            )
      }

     componentDidMount() {
        this.props.actions.getbanner();  
      }

     play= (e) => {

     musicId=e;
     this.props.actions.playMusic(e);
     this.props.actions.showLyric(e);
     this.props.actions.showComments(1,e);

      }



     searchSong = (e) => {
       musicName=e;
      this.props.actions.searchMusic(1,musicName);
      }

      showPlayList= () => {

      }

      likes = (e) =>{
    this.props.actions.likes(e,musicId);
      }

      onChangePage = (page) => {
            this.props.actions.searchMusic(page,musicName);
      }

      onChangePage2 = (page) =>{
           this.props.actions.showComments(page,musicId);
      }
      callback= (keys) => { 
      if (keys==="2") {    
      this.props.actions.searchMusicPlayList();
    }
      }
}

 const mapState=(state)=>{
       return{
           ...state.memorandun}
            }   
                
 const mapDispatch=(dispatch)=>{
      return{
              actions:bindActionCreators(actions,dispatch)
            } 
      }
      
export default connect(mapState,mapDispatch)(Memorandun)
