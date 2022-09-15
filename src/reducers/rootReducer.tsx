import { combineReducers } from 'redux';
import userReducer from './userReducer';
import OrderReducer from './orderReducer';

const rootReducer = combineReducers({
     user: userReducer,
     order: OrderReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;