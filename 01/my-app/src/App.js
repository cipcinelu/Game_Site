import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
  return (<BrowserRouter>
    <div className="app-wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div class = 'app-wrapper-content'>
        <Route path='/dialogs' render = {() => <Dialogs dialogs = {props.dialogs} messages = {props.messages}/>}></Route>
        <Route path='/profile' render = {() => <Profile posts = {props.posts}/>}></Route>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
