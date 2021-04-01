import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware))
)

export default store
