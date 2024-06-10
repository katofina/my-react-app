import { combineReducers } from "redux";
import {ModalReducer} from './ModalReducer';
import {ResultsReducer} from './ResultsReducer';

export const rootReducer = combineReducers({
    modal: ModalReducer,
    res: ResultsReducer,
})

