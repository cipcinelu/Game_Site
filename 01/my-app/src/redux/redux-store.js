import {combineReducers, createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReduces";

let reducers = combineReducers(  //это что-то типо стейта
    {
        dialogsPage:dialogsReducer, //мы создаём объект
        profilePage:profileReducer, // совойством:значением
        sidebarPage:sidebarReducer,
        usersPage:usersReducer,
    }
)

let store = createStore(reducers); //сам создаёт стейт со свойствами

export default store;