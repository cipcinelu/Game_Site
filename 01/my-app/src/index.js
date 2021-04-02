import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, post: 'Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!', likesCount: 12},
  {id:2, post: 'Это мой первый пост!', likesCount: 21}
]

let dialogs = [
  {id:1, name: 'Dima'},
  {id:2, name: 'Anton'},
  {id:3, name: 'Lera'},
  {id:4, name: 'Vitala'},
  {id:5, name: 'Sveta'},
]

let messages = [
  {id:1, message: 'HI'},
  {id:2, message: 'Как оно?'},
  {id:3, message: 'Когда  сдашь проект?'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
