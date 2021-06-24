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
    if (action.type === 'ADD-POST') //это action, а action это объект
    {
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCount:1
      };
      this._state.profilePage.posts.push (newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT')
    {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY')
    {
      this._state.dialogsPage.newMessageBody = action.body; //меняем стейт, сохраняем текст из поля ввода
      this._callSubscriber(this._state); //говорим всем, что изменили стейт, перерисовка страницы
    } else if (action.type === 'SEND_MESSAGE')
    {
      let body = this._state.dialogsPage.newMessageBody; //копируем сохранённый текст, во временную переменную
      this._state.dialogsPage.newMessageBody = ''; //обнуляем поле ввода
      this._state.dialogsPage.messages.push({id: 6, message: body}); //отправляем текст в базу
      this._callSubscriber(this._state); 
    }
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