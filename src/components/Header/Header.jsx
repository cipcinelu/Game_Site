import logo from '../../img/jobstik.png'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    
    return <header className={style.header}> {/*было <header className='header'>*/}
    <img src={logo} alt="LOGO"/>
    <div className={style.loginBlock}>
        {props.isAuth ? props.login
            :<NavLink to = '/login'>Login</NavLink>}
    </div>
</header>
}
export default Header;