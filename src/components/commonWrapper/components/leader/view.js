import React,{Component}  from 'react'
import {Row, Col} from 'antd';
import {connect} from 'react-redux'
import {getChangeListAction} from './actionCreator'
import {Link} from 'react-router'

  class  Leader  extends Component{
    render(){
        return(
            <div>
            <div className="leaderStyle">
            <div className="leader">
                <Row>
                    <Col span={6}>
                        常速英语
                    </Col>
                    <Col span={9}>慢速英语(中级)</Col>
                    <Col span={9}>英语教学(初级)</Col>
                </Row>
            </div>
            <Row>
                <Col span={2}>
                    <ul className="first">
                        <li>音频</li>
                        <li>视频</li>
                        <li>翻译</li>
                    </ul>
                </Col>
                <Col span={11}>
                    <ul className="two">
                    {
                        this.props.list.map((value)=>{
                            return (
                                <li key={value.id}><Link  activeStyle={{color: '#44bbd0' }} to={value.link} >{value.title}</Link></li>
                            )    
                        })
                    }
                    </ul>
                </Col>
                <Col span={11}>
                    <ul className="three">
                    {
                        this.props.list.map((value)=>{
                            return (
                                <li key={value.id}>{value.title}</li>
                            )    
                        })
                    }
                    </ul>
                </Col>
            </Row>
        </div>
        <div className="homeNav"><p style={{marginLeft:20}}>VOA/慢速英语(英语)/</p></div>
        </div>
        )
    }
    componentDidMount() { 
        this.getLeaderInfo();
  
    }
    getLeaderInfo() {
        fetch('/api/leader.json').then((res) => res.json())
            .then(this.props.changeList)
    }
} 

const mapStateToProps = (state) => {
    return {list: state.leader.list}
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeList: (res) => {
            var action = getChangeListAction(res.data)
          
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Leader)