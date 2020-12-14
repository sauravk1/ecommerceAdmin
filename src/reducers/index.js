import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    product:productReducer,
    order:orderReducer,
    category:categoryReducer
});
export default rootReducer;