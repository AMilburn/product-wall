import initialState from './initialState';
import {RECEIVE_DATA} from '../actions/actionTypes';

export default function recommendedOnline(state = initialState.recommendedInStore, action) {
  let newState;

  switch (action.type) {

    case RECEIVE_DATA:
      console.log('RECEIVE_DATA RecommendedOnline Action')
      newState = action.data.recommendedOnline;
      return newState;

    default:
      return state;
  }
}