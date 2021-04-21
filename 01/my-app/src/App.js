import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom'
import { updateNewPostText } from './redux/state';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div class = 'app-wrapper-content'>
        <Route path='/dialogs' render = {() => <Dialogs state = {props.state.dialogsPage}/>}></Route>
        <Route path='/profile' render = {() => <Profile profilePage = {props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>}></Route>
      </div>
    </div>
  );
}

export default App;
