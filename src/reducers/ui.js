import initialState from './initialState';
import { UPDATE_VIEW, UPDATE_LOADING } from '../actions/actionTypes';

export default function ui(state = initialState.ui, action) {
  let newState;

  switch (action.type) {
    
    case UPDATE_VIEW:
        newState = {
            ...state,
            page: action.page,
        }
        console.log('RECEIVE_STUFF Action');
        return newState;

    case UPDATE_LOADING:
        newState = {
            ...state,
            isLoading: action.isLoading,
        }
        console.log('UPDATE_LOADING Action');
        return newState;

    default:
      return state;
  }
}