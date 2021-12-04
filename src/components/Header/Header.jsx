import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import { makeStyles } from "@material-ui/core/styles";
import { Svg } from '../svg';

const useStyles = makeStyles((theme) => ({
  toolbar: {

  },
  logo: {
    marginTop:`4px`,
    marginLeft: `1%`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  logoActive: {
    marginTop:`4px`,
    marginLeft: `13%`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },  
}))

let getWindowDimensions = () => {
  const { innerWidth: width } = window;
  if (width > 640) return true
  else return false
}
const Header = (props) => {
    const [isDrawerOpen, setDrawerOpen] = useState(getWindowDimensions());
    const styleUI = useStyles();

    return <AppBar style={{boxShadow: "none"}}>
        <Toolbar variant = "dense" className = {style}>
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