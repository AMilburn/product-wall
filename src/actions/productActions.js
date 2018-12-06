import * as types from './actionTypes';

// function url() {
//   return 'www.url.com';
// }

export function updateView(view) {
    console.log(view);
    return {type: types.UPDATE_VIEW, page: view};
}

export function updateLoadingState(isLoading) {
    return {type: types.UPDATE_LOADING, isLoading: isLoading}
}

export function fetchProductInfo() {
    console.log('this is running');
    return dispatch => {
        dispatch({ type: types.UPDATE_LOADING, isLoading: true })
        return fetch('http://10.16.2.55:8080/store/products/v1?store=NLD-502', {
            method: 'GET',
            mode: 'no-cors',
        })
        .then(response => {
            response.json();
            console.log(response.json());
            dispatch({ type: types.UPDATE_VIEW, page: 'results' })
            dispatch({ type: types.UPDATE_LOADING, isLoading: false })
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: types.UPDATE_LOADING, isLoading: false })
        });
    }
}