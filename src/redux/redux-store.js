import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReduces";
import thunkMiddleware from 'redux-thunk'
import { reducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers(  //это что-то типо стейта
    {
        dialogsPage: dialogsReducer, //мы создаём объект
        profilePage: profileReducer, // совойством:значением
        sidebarPage: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: reducer,
        app: appReducer,
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(  //сам создаёт стейт со свойствами
        applyMiddleware(thunkMiddleware)    // включает промежуточный слой, нужен для работы thunk
    ));
    
export default store;
