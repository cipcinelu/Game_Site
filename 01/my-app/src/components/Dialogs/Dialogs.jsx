import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <div className = {classes.dialog}>
        <NavLink to = {path}>{props.Name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Anton'},
        {id:3, name: 'Lera'},
        {id:4, name: 'Vitala'},
        {id:5, name: 'Sveta'},
    ]

    let messages = [
        {id:1, message: 'HI'},
        {id:2, message: 'Как оно?'},
        {id:3, message: 'Когда  сдашь проект?'}
    ]

    let dialogsElement = dialogs.map ( d => <DialogItem Name = {d.name} id = {d.id}/>)
    let messagesElement = messages.map ( m => <Message message = {m.message}/>)

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