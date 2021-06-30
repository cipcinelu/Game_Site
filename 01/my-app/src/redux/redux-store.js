import {combineReducers, createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers(  //это что-то типо стейта
    {
        dialogsPage:dialogsReducer, 
        profilePage:profileReducer,
        sidebarPage:sidebarReducer,
    }
)

let store = createStore(reducers); //сам создаёт стейт со свойствами

export default store;