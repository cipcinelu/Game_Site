import { rerenderEntireThree } from "../render";

let state = {
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
}

export let addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likesCount:1
  };
  state.profilePage.posts.push (newPost);
  state.profilePage.newPostText = '';
  rerenderEntireThree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export default state