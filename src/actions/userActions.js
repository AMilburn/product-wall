import * as types from "./actionTypes";
import * as productActions from "./productActions";

export function fetchUserData(imageData) {
  return dispatch => {
    dispatch({ type: types.RECOGNIZE_USER_REQ, payload: imageData });
    const payload = new FormData();
    payload.append("rawImage", JSON.stringify(imageData));
    return fetch(`http://localhost:5555/api/recognize`, {
      method: "POST",
      body: payload
    })
      .then(response => {
        const res = response.json();
        return res;
      })
      .then(json => {
        if (!json.ExternalImageId) {
          dispatch({ type: types.RECOGNIZE_USER_ERR });
          dispatch({ type: types.UPDATE_VIEW, page: "error" });
          return;
        }
        dispatch(
          productActions.fetchProductInfo(
            json.ExternalImageId === "Amanda" ||
              json.ExternalImageId === "Rosie"
              ? "girls"
              : "boys"
          )
        ); // or boys depending on the payload
        dispatch({ type: types.RECOGNIZE_USER_RES, payload: json });
        dispatch({ type: types.UPDATE_VIEW, page: "results" });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.RECOGNIZE_USER_ERR });
        dispatch({ type: types.UPDATE_VIEW, page: "error" });
      });
  };
}
