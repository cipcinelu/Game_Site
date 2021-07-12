import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReduces";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers(  //это что-то типо стейта
    {
        dialogsPage:dialogsReducer, //мы создаём объект
        profilePage:profileReducer, // совойством:значением
        sidebarPage:sidebarReducer,
        usersPage:usersReducer,
        auth: authReducer,
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //сам создаёт стейт со свойствами
                                // включает промежуточный слой
export default store;
