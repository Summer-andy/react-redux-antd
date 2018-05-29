import { combineReducers }  from 'redux'
import { reducer as commonReducer } from '../components/commonWrapper/'
import { reducer as HomeReducer } from '../pages/Home/'
import { reducer as DetailReducer } from '../pages/Detail/'
import {reducer as MainListReducer } from '../pages/MainList/'
import {reducer as UserReducer } from '../pages/User/'
import {reducer as UnitsReducer } from '../pages/UnitManager/'
import {reducer as RepairsReducer } from '../pages/Repair/'
import {reducer as LineReducer} from '../pages/GateWay/'
import {reducer as GateNodeReducer} from '../pages/GatewayNodeInfoCharge/'
import {  routerReducer } from 'react-router-redux'
export default combineReducers(
    {
       common:commonReducer,
       home:HomeReducer,
       detail:DetailReducer,
       mainlist:MainListReducer,
       routing:routerReducer,
       userinfo:UserReducer,
       unitsinfo:UnitsReducer,
       repairsinfo:RepairsReducer,
       line:LineReducer,
       gatenode:GateNodeReducer
    }
)