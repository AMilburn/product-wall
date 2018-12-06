import initialState from './initialState';
import {RECEIVE_DATA} from '../actions/actionTypes';

export default function recommendedInStore(state = initialState.recommendedInStore, action) {
  let newState;

  switch (action.type) {

    case RECEIVE_DATA:
      console.log('RECEIVE_DATA recommendedInStore Action')
      newState = action.data.inStore;
      return newState;

    default:
      return state;
  }
}