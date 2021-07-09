import './App.css';
import Navbar from './components/NavBar/NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer\'';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer></HeaderContainer>
      <Navbar></Navbar> 
      <div className = 'app-wrapper-content'>
        <Route path='/dialogs' render = {() => <DialogsContainer /*store = {props.store} state = {props.state.dialogsPage}*//>}></Route> 
        <Route path='/profile/:userId?' render = {() => <ProfileContainer/>}></Route> {/*:userId - это объявелние параметра, для withRoute, вопрос обозначает нестогий параметр*/}
        <Route path='/users' render = {() => <UsersContainer/>}></Route>
      </div>
    </div>
  );
}

export default App;
