import classes from './polevvoda.module.css'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../../redux/state'

const Polevvoda = (props) => {

    let state = props.store.getState().dialogsPage;
    let newMessageBody = state.newMessageBody; //получаем сохранённое значение textarea

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (event) => {
        let body = event.target.value; //получаем значение из textarea
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <div className={classes.polevvoda}>    
                <textarea value = {newMessageBody}  //Задает исходное значение, содержащееся в элементе управления.
                          onChange={onNewMessageChange}></textarea> 
            <button onClick = {onSendMessageClick}>SEND</button></div>

}

export default Polevvoda