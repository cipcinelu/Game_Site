import React from 'react'
import preloader from '../../../img/pacman.gif'
import styles from './Preloader.module.css'

let Preloader = (props) => {
    return <div className = {styles.pacman}>
        <img src = {preloader} alt='Loading...'/>
    </div>
}

export default Preloader