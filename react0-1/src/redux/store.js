import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux'
import thunk from 'redux-thunk'
import userInfo from 'reducers/userInfo'

const middleware = applyMiddleware(thunk);

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(combineReducers({
	userInfo,
}), composeEnhancers(middleware))

//compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 
