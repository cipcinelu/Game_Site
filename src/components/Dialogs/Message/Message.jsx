import { Typography } from '@material-ui/core'
import classes from './../Dialogs.module.css'

const Message = (props) => {
    return <div>
        <Typography >
            {props.message}
        </Typography>
    </div>
}

export default Message