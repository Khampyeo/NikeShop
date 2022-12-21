import { combineReducers } from "redux";
import { reducerDataShoes } from "./storeDataShoe";
import {rootReducerStorePage} from './StorePageReducer'
import {reducerDetailItem} from './detailItemReducer'
import {reducerUser} from './userReducer'

export const RootReducer = combineReducers({
    rootReducerStorePage,
    reducerDataShoes,
    reducerDetailItem,
    reducerUser
})