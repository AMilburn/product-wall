import {combineReducers} from 'redux';
import recommendedInStore from './recommendedInStore';
import recommendedOnline from './recommendedOnline';
import trendingNow from './trendingNow';
import ui from './ui';

const rootReducer = combineReducers({
    recommendedInStore,
    recommendedOnline,
    trendingNow,
    ui,
});

export default rootReducer;