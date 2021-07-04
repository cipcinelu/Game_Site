import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
          {id:1, message: 'Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!', likesCount: 12},
          {id:2, message: 'Это мой первый пост!', likesCount: 21}
      ],
      newPostText: 'JS СОСАТБ',
    },
  
    dialogsPage: {
      dialogs: [
        {id:1, name: 'Dima'},
        {id:2, name: 'Anton'},
        {id:3, name: 'Lera'},
        {id:4, name: 'Vitala'},
        {id:5, name: 'Sveta'},
        ],
  
      messages: [
        {id:1, message: 'HI'},
        {id:2, message: 'Как оно?'},
        {id:3, message: 'Когда  сдашь проект? Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!'},
      ],
        newMessageBody: '',
    }
  },
  _callSubscriber()
  {
    console.log ("не работает");
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer; //паттерн
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsePage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber (this._state);
  }
}

export const addPostAction = () => ({type: ADD_POST})
export const updateNewPostTextAction = (text) => 
      ({type:UPDATE_NEW_POST_TEXT, newText:text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
      ({type:UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
//windows.store = store;