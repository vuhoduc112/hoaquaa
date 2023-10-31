import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import HeaderReducer from '../Reducers/headerReducer';

const rootReducer = combineReducers({
    header: HeaderReducer,
    // Thêm các reducer khác nếu cần
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
