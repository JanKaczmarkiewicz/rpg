import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
