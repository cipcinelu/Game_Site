import './App.css';
import Navbar from './components/NavBar/NavBar';
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer\'';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import { withSuspense } from './HOC/withSuspense';
import style from './App.css'
import { NotFound } from './components/NotFound';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
//импорт по мере надобности

const App = (props) => {

   const catchAllUnhandedErrors = (promiseRejectionEvent) => {
      console.log ('Some error')
   }

  useEffect(() => { // выполнит функцию после отрисовки
    props.initializeApp();
    window.addEventListener("unhandledrejection", catchAllUnhandedErrors())
  }) // выполняется в момент изменения [этой] переменной

  if (!props.initialized) {
    return <Preloader/>
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer></HeaderContainer>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Switch>
        <Route exact path='/' render={()=> <Redirect to='/profile'/>} />
        <Route path='/dialogs' render={withSuspense (DialogsContainer)} />
        <Route path='/profile/:userId?' render={withSuspense (ProfileContainer)}/> {/*:userId - это объявелние параметра, для withRoute, вопрос обозначает нестогий параметр*/}
        <Route path='/users' render={() => <UsersContainer />}></Route>
        <Route path='/login' render={() => <Login />}></Route>
        <Route path='/*' render={() => <NotFound/>}></Route>
        </Switch>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})
const AppContainer = compose(
  withRouter,// добавляет данные урла в пропсы
  connect(mapStateToProps, { initializeApp }))(App)

export const MainApp = (props) => {
  return <HashRouter>   {/* BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы, а HashRouter используйте когда у вас статический веб сайт. */}
     <Provider store={store}  > {/*создаёт "контекст" */}
      <AppContainer className = ''/>
    </Provider>
  </HashRouter>
}