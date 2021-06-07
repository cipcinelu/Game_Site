import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>  {/*строгий синтаксис, но выводит ошибки */}
      <BrowserRouter>   {/* BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы, а HashRouter используйте когда у вас статический веб сайт. */}
        <App state = {store.getState()} 
             addPost = {store.addPost.bind(store)} 
             updateNewPostText = {store.updateNewPostText.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
