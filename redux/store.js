import { createStore, applyMiddleware }from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducers from './search/searchReducers'
import logger from 'redux-logger'

const store = createStore(searchReducers, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store
