import Message from './Message/Message'
import style from './Dialogs.module.css'
import FormikTextArea from '../common/FormikControls/FormikTextArea';
import { Button, ButtonGroup } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d =>
        <Button
            component={NavLink}
            to={'/dialogs/' + d.id}>
            {d.name}
        </Button>)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)

    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group">
                {dialogsElement}
            </ButtonGroup>
        </div>
        <div className={style.messager}>
            {messagesElement}
        </div>
        
        <FormikTextArea submit={props.sendMessage} />
    </div>
}

export default Dialogs