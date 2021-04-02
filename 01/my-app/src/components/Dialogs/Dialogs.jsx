import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    
    let dialogsElement = props.dialogs.map ( d => <DialogItem Name = {d.name} id = {d.id}/>)
    let messagesElement = props.messages.map ( m => <Message message = {m.message}/>)

      return <div className={classes.dialogs}>
                <div className = {classes.dialogsItems}>
                    {dialogsElement}
                </div>
        
                <div className = {classes.messager}>
                    {messagesElement}
                </div>
            </div>
}

export default Dialogs