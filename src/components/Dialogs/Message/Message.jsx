import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        display: "inline-block",
    },
}));

const Message = (props) => {
    const styleUI = useStyles();

    return <div className = {styleUI.root}>
        <Paper elevation={0} variant="outlined" className = {styleUI.paper}>
            <Typography >
                {props.message}
            </Typography>
        </Paper>
    </div>
}

export default Message