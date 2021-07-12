import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem Name={d.name} id={d.id} key = {d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message} key = {m.id}/>)
    let newMessageBody = state.newMessageBody; //получаем сохранённое значение textarea

    let onSendMessageClick = () => {
        props.sendMessage(); 
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value; //получаем значение из textarea
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to = {'/login'}></Redirect>

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={classes.messager}>
            {messagesElement}
        </div>
        <div className={classes.polevvoda}>
            <textarea value={newMessageBody}  //Задает исходное значение, содержащееся в элементе управления.
                      onChange={onNewMessageChange}></textarea>
            <button onClick={onSendMessageClick}>SEND</button></div>
    </div>
}

export default Dialogs