import { sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router'

let mapStateToProps = (state) => { //отвечает за данные
    return{
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => { //отвечает за отправление данных через коллбеки
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

export default compose ( // это конвеер, он вызывает функцию(снизу в верх) и передаёт её результат выше по списку
    connect(mapStateToProps, mapDispatchToProps), //рисует презентационную компаненту и передаёт ей данные из полученных функций
    withRouter,
    withAuthRedirect,
) (Dialogs)