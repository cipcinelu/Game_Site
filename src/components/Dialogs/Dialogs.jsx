import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem Name={d.name} id={d.id} key={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody); // название заданное в филде
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={classes.messager}>
            {messagesElement}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
}
let maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}
            className={classes.polevvoda}>
            <Field className = {classes.textarea} component={Textarea}
                    validate = {[required, maxLength50]}
                    name='newMessageBody'>
            </Field>
            <button>SEND</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm)

export default Dialogs