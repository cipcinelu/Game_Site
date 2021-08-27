import logo from '../../img/jobstik.png'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Svg } from '../svg';

const useStyles = makeStyles((theme) => ({
  logo: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  logoActive: {
    width: `70px`,
    
    marginLeft: `17%`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },  
}))

const Header = (props) => {
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const styleUI = useStyles();

    return <AppBar className={style.header}>
        <Toolbar>
            <IconButton onClick = {() => setDrawerOpen(true)} 
                        edge="start" 
                        className={style.menuButton} 
                        color="inherit" 
                        aria-label="menu">
                <MenuIcon/>
            </IconButton>
            
            <Navbar isDrawerOpen = {isDrawerOpen} 
                    setDrawerOpen = {setDrawerOpen}/>
            
            <NavLink to = '/profile' className = {isDrawerOpen 
                                          ? styleUI.logoActive
                                          : styleUI.logo}>
            <Svg id = 'jobstik'></Svg>
            </NavLink>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login + ' '}
                        <IconButton variant="contained"
                            onClick={props.logout}
                        ><ExitToAppIcon />
                        </IconButton></div>
                    :
                    <Button>
                        <NavLink to='/login'
                            className={style.loginLink}>Login</NavLink>
                    </Button>}
            </div>
        </Toolbar>
    </AppBar>
}
export default Header;