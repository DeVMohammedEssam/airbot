import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "./reducers/usersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import errorsReducer from "./reducers/errorsReducer";
const composeEnhancers = composeWithDevTools({});
const store = createStore(combineReducers({
    user: userReducer,
    error: errorsReducer
}), composeEnhancers(
    applyMiddleware(thunk)
));
export default store;