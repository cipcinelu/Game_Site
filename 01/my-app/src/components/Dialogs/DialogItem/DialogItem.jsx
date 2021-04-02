import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <div className = {classes.dialog}>
        <NavLink to = {path}>{props.Name}</NavLink>
    </div>
}

export default DialogItem