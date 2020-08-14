import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { albumsReducer } from '../reducers/albumsReducer';
import { artistsReducer } from '../reducers/artistsReducer';

const allReducers = combineReducers({
    albums: albumsReducer,
    artists: artistsReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
    allReducers,
    allStoreEnhancers
);