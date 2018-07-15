import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as list } from './components/MessageList/MessageList.actions'
import promiseMiddleware from 'redux-promise'

export default createStore(
  combineReducers({ list }),
  {},
  composeWithDevTools(applyMiddleware(promiseMiddleware)),
)
