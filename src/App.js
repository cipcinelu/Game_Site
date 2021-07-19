import './App.css';
import Navbar from './components/NavBar/NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer\'';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer></HeaderContainer>
        <Navbar></Navbar>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer /*store = {props.store} state = {props.state.dialogsPage}*/ />}></Route>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}></Route> {/*:userId - это объявелние параметра, для withRoute, вопрос обозначает нестогий параметр*/}
          <Route path='/users' render={() => <UsersContainer />}></Route>
          <Route path='/login' render={() => <Login />}></Route>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose (
  withRouter,
  connect (mapStateToProps, {initializeApp})) (App)
