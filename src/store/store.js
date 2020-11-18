import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import userSaga from '../sagas/users'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  users: [],
  user: {},
  quantity: 10,
  currentSince: 0,
  nextSince: 0,
  errorMessage: ''
}

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case "USERS_FETCH_SUCCEEDED": {
      return {
        ...state,
        users: action.payload.users,
        nextSince: action.payload.nextSince
      }
    }
    case "USER_FETCH_SUCCEEDED": {
      return {
        ...state,
        user: action.payload,
      }
    }
    case "CHANGE_QUANTITY": {
      return {
        ...state,
        quantity: action.payload.quantity,
        currentSince: 0
      }
    }
    case "CHANGE_SINCE": {
      return {
        ...state,
        currentSince: action.payload.nextSince
      }
    }
    default:
      return state
  }
}

const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga)

export default store
