import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
import {ModalReducer} from './ModalReducer';
import {ResultsReducer} from './ResultsReducer';

export const rootReducer = combineReducers({
    data: DataReducer,
    modal: ModalReducer,
    res: ResultsReducer,
})

