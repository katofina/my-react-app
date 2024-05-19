import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
import {ModalReducer} from './ModalReducer';
import {UsersReducer} from './UsersReducer';
import {AuthReducer} from './AuthReducer';

export const rootReducer = combineReducers({
    data: DataReducer,
    modal: ModalReducer,
    users: UsersReducer,
    auth: AuthReducer,
})

