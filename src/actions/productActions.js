import * as types from "./actionTypes";

export function updateView(view) {
  console.log(view);
  return { type: types.UPDATE_VIEW, page: view };
}

export function updateLoadingState(isLoading) {
  return { type: types.UPDATE_LOADING, isLoading: isLoading };
}

export function fetchProductInfo(gender) {
  return dispatch => {
    dispatch({ type: types.UPDATE_LOADING, isLoading: false });
    // setTimeout(() => {
    return fetch(
      `http://10.22.18.239:8080/store/products/v1?store=NLD-502&type=${gender}`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        dispatch({ type: types.RECEIVE_DATA, data: json });
        dispatch({ type: types.UPDATE_VIEW, page: "results" });
        dispatch({ type: types.UPDATE_LOADING, isLoading: false });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.UPDATE_LOADING, isLoading: false });
      });
    // }, 3000);
  };
}
