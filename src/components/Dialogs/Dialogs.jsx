import Message from './Message/Message'
import style from './Dialogs.module.css'
import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useFormik } from 'formik';

const Dialogs = (props) => {

    let [id, setId] = useState(1)
    let state = props.dialogsPage;

    useEffect(() => {
        let id = props.match.params.userId
        if (!id) {
            setId(0)
        }
        else setId(id)
    }, [props.match.params.userId])
    
    let dialogsElement = state.dialogs.map(d =>
        <Button
            key={d.id}
            component={NavLink}
            to={'/dialogs/' + d.id}>
            {d.name}
        </Button>)
    let messagesElement = state.messages[id].map(m =>
        <Message message={m.message} key={m.id} />)

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.message.length) {
                errors.message = 'Message is empty'
            }
            if (values.message.length > 100) {
                errors.message = 'This text is too long'
            }
            return errors
        },
        onSubmit: (values) => {
            props.sendMessage(id, values.message)
            values.message = ''
            console.log(values.message)
            //console.log(e.target.values)
        }
    });

    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group">
                {dialogsElement}
            </ButtonGroup>
        </div>
        <div className={style.messages}>
            {messagesElement}
        </div>
        {id > 0 && <form onSubmit={formik.handleSubmit}>
            <TextField  className = {style.textField}
                        label = 'Message'
                        name='message'
                        id="message" 
                        type = 'message'
                        autoFocus = {true}
                        value = {formik.values.message}
                        onChange={formik.handleChange}
                        error = {formik.touched.message 
                            && Boolean(formik.errors.message)}
                        helperText={formik.touched.message 
                            && formik.errors.message}/>
        </form>}
    </div>
}

export default Dialogs