import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import { Button } from '@material-ui/core'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <Button
            component={NavLink} 
            to = {path}>
            {props.Name}
        </Button>
}

export default DialogItem