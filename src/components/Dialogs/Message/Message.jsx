import { Paper, Typography } from '@material-ui/core'
import classes from './../Dialogs.module.css'

const Message = (props) => {
    return <div>
        <Paper elevation={2}>
        <Typography >
            {props.message}
        </Typography>
        </Paper>
    </div>
}

export default Message