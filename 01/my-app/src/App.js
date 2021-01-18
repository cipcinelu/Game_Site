import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
}

export default App;
