import { combineReducers } from "redux";
import {ModalReducer} from './ModalReducer';

export const rootReducer = combineReducers({
    modal: ModalReducer,
})

