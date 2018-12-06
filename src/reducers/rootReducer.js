import {combineReducers} from 'redux';
import recommendedInStore from './recommendedInStore';
import recommendedOnline from './recommendedOnline';
import trendingNow from './trendingNow';
import ui from './ui';
import userData from './userData';

const rootReducer = combineReducers({
    recommendedInStore,
    recommendedOnline,
    trendingNow,
    ui,
    userData,
});

export default rootReducer;