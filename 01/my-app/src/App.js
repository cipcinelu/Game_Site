import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div className = 'app-wrapper-content'>
        <Route path='/dialogs' render = {() => <DialogsContainer /*store = {props.store} state = {props.state.dialogsPage}*//>}></Route> 
        <Route path='/profile' render = {() => <Profile /*profilePage = {props.state.profilePage} dispatch = {props.dispatch} store ={props.store}*//>}></Route>
      </div>
    </div>
  );
}

export default App;
