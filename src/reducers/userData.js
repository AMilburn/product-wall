import initialState from "./initialState";
import {
  RECOGNIZE_USER_REQ,
  RECOGNIZE_USER_RES,
  RECOGNIZE_USER_ERR
} from "../actions/actionTypes";

export default function ui(state = initialState.ui, action) {
  switch (action.type) {
    case RECOGNIZE_USER_REQ:
    case RECOGNIZE_USER_ERR:
      return {};

    case RECOGNIZE_USER_RES:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
