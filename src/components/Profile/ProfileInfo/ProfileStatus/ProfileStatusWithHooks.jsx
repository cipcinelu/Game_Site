import { CardContent, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); // тоже самое только короче
    let [status, setStatus] = useState(props.status);
    
    useEffect(() => { // выполнит функцию после отрисовки
        setStatus(props.status)
    }, [props.status]) // выполняется в момент изменения [этой] переменной

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    };
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    };
    const onStatusChange = (e) => { setStatus(e.currentTarget.value) }
    
    const formik = useFormik({
        initialValues: {
          status:status
        },
        validate: (values) => {
            const errors = {}

            if (values.status.length > 20) {
                errors.status = 'This text is too long'
            }
            return errors
        },
        onSubmit: (values) => {
            setStatus (values.status)
            deactivateEditMode()
        }
    });

    return <div>
        {!editMode &&
            <CardContent>
                <span onClick={activateEditMode}>{status || '---'}</span>
            </CardContent>
        }
        {editMode &&
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField 
                        id="status"
                        name="status"
                        onBlur={formik.handleSubmit}
                        onChange = {e => {
                            formik.handleChange(e)
                            onStatusChange(e)}
                        }
                        autoFocus={true}
                        value={props.status} 
                        error={formik.touched.status && Boolean(formik.errors.status)}
                        helperText={formik.touched.status && formik.errors.status}
                    />
                </form>
            </CardContent>
        }
    </div>
}

export default ProfileStatusWithHooks;