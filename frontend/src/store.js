import {applyMiddleware,combineReducers,createStore} from 'redux';
import{composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import{productListReducer,productDetailsReducer,productDeleteReducer, productCreateReducer, productUpdateReducer,productReviewCreateReducer} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer';
import { userDetailsReducer, userLoginReducer, userUpdateProfileReducer, userRegisterReducer,userListReducer,userDeleteReducer,userUpdateReducer} from './reducers/userReducer';
import { orderCreateReducer,orderDetailsReducer,orderPayReducer,orderMyListReducer,orderListReducer, orderDeliverReducer } from './reducers/orderReducer';




const reducer =combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productCreateReducer,

    cart:cartReducer,

    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,

    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderMyList:orderMyListReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliverReducer


});

const cartItemsFromStorage= localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[];

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null;

const shippingAddressFromStorage=localStorage.getItem('shippingAdress') ? JSON.parse(localStorage.getItem('shippingAddress')):{};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
	? JSON.parse(localStorage.getItem('paymentMethod'))
	: 'paypal';


const initialState={
    cart:
    {
        cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage,
        paymentMethod:paymentMethodFromStorage,
    },
    userLogin: { userInfo:userInfoFromStorage },
};      

const middlewares=[thunk];

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))

);

export default store;