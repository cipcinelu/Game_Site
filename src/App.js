import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer\'';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { Suspense, useEffect } from 'react';
import React from 'react';
import { withSuspense } from './HOC/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

//импорт по мере надобности

const App = (props) => {

  useEffect(() => { // выполнит функцию после отрисовки
    props.initializeApp();
  }) // выполняется в момент изменения [этой] переменной
  // componentDidMount() {
  //   this.props.initializeApp();
  // }

  if (!props.initialized) {
    return <Preloader />
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer></HeaderContainer>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={withSuspense (DialogsContainer)} />
        <Route path='/profile/:userId?' render={withSuspense (ProfileContainer)}/> {/*:userId - это объявелние параметра, для withRoute, вопрос обозначает нестогий параметр*/}
        <Route path='/users' render={() => <UsersContainer />}></Route>
        <Route path='/login' render={() => <Login />}></Route>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

export const MainApp = (props) => {
  return <BrowserRouter>   {/* BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы, а HashRouter используйте когда у вас статический веб сайт. */}
    <Provider store={store}  >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}