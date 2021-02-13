import classes from'./NavBar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className = {classes.item}><NavLink to="/profile">Profile</NavLink></div>
        <div className = {classes.item}><NavLink to="/dialogs">Messeges</NavLink></div>
        <div className = {classes.item}><NavLink to="">News</NavLink></div>
        <div className = {classes.item}><NavLink to="">Music</NavLink></div>
        <div className = {classes.item}><NavLink to="">Settings</NavLink></div>
    </nav>
}

export default Navbar