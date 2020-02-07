/**
 * 
 * Настройки redux store
 * 
*/

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import appReducer from './app-reducer';

// Редьюсеры
const reducers = combineReducers({
    app: appReducer,
});

// Для Redux DevTools
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Создание Store
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunk)));

export default store;