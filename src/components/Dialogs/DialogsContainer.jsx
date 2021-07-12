import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'

let mapStateToProps = (state) => { //отвечает за данные
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => { //отвечает за отправление данных через коллбеки
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //рисует презентационную компаненту и передаёт ей данные из полученных функций
//штука выше возвращает новую контейнерную компаненту

export default DialogsContainer