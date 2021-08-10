import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import FormikTextArea from '../common/FormikControls/FormikTextArea';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem Name={d.name} id={d.id} key={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={classes.messager}>
            {messagesElement}
        </div>
        <FormikTextArea submit={props.sendMessage} />
    </div>
}

export default Dialogs