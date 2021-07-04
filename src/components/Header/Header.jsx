import logo from '../../img/jobstik.png'
import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}> {/*было <header className='header'>*/}
    <img src={logo} alt="LOGO"/>
</header>
}
export default Header;