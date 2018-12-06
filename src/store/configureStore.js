// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/rootReducer';
// import thunk from 'redux-thunk';

// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
//   );
// }


import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk)),
    );
}