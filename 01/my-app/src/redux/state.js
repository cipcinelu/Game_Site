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
        {id:3, message: 'Когда  сдашь проект?'}
      ]
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
    if (action.type === 'ADD-POST')
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
    }
  }
}

export default store;
//windows.store = store;