
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk'
import { heroReducer } from '../reducers/heroReducer';


const composeEnhancers = (
        typeof window !== 'undefined' 
        && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        || compose;


const reducers = combineReducers({
        auth: authReducer,
        hero: heroReducer

})



export const store = createStore(
        reducers,
       composeEnhancers(
                applyMiddleware(thunk)
        )

        )