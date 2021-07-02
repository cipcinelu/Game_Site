import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>  {/*строгий синтаксис, но выводит ошибки */}
      <BrowserRouter>   {/* BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы, а HashRouter используйте когда у вас статический веб сайт. */}
        <Provider store = {store}  >
        {/* <App state = {store.getState()} 
             dispatch = {store.dispatch.bind(store)}
             store={store}/> */}
             <App></App>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireThree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireThree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
