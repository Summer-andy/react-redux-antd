import React, { Component } from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import { View as CommonWrapper} from '../components/commonWrapper/'
import { View as Home } from '../pages/Home/'
import {View as Detail} from '../pages/Detail/'
import  {View as MainList} from '../pages/MainList/'
import  {View as User} from '../pages/User/'
import  {View as Unit} from '../pages/UnitManager'
import {View as Repair} from '../pages/Repair/'
import {View as Line} from '../pages/GateWay/'
import {View as GateNode} from '../pages/GatewayNodeInfoCharge/'
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store/'
import './style.css'
import './reset.css'
import 'antd/dist/antd.css'
import 'whatwg-fetch'
const history = syncHistoryWithStore(browserHistory, store)
class App extends Component {

  render() {
    return (
      <div className="main" >
       <Provider store={store}>
        <Router onUpdate={this.handleUpdate.bind(this)}  history={history}>
               <Route   path='/'  component={CommonWrapper}>
                       <IndexRoute component={Home}></IndexRoute> 
                       <Route path='detail1' component={MainList}>
                           <IndexRoute  component={Detail}></IndexRoute>
                           <Route path="/userinfo" component={User}></Route>
                           <Route path="/unitinfo" component={Unit}></Route>
                           <Route path="/repairsinfo" component={Repair}></Route>
                           <Route path="/line" component={Line}></Route>
                           <Route path="/gatenode" component={GateNode}></Route>
                       </Route>  
               </Route> 
        </Router>
      </Provider>
      </div>
    );
  }
  handleUpdate()
  {
    console.log("访问了一个新的页面");
  }
}

export default App;
