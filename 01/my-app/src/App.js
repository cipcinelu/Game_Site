import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      откатили
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
}

export default App;
