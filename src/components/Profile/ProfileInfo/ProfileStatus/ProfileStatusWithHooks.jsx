import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    
    // let stateWithSetState = useState (false); // создаём значение для локального стейта
    // let editMode = stateWithSetState[0]; // значение
    // let setEditMode = stateWithSetState[1] // функция меняющая значение

    let [editMode, setEditMode] = useState (false); // тоже самое только короче
    let [status, setStatus] = useState (props.status);
    
    useEffect ( () => { // выполнит функцию после отрисовки
        setStatus(props.status)
    }, [props.status]) // выполняется в момент изменения [этой] переменной

    const activateEditMode = () => {setEditMode (true)};
    const deactivateEditMode = () => {
        setEditMode (false)
        props.updateStatus(status)
    };
    const onStatusChange = (e) => {setStatus(e.currentTarget.value)} 

    return <div>
        {!editMode &&
            <div className="div">
                <span onClick = {activateEditMode}>{props.status || '---'}</span>
            </div>
        }
        {editMode &&
            <div className="div">
                <input onChange = {onStatusChange} 
                        onBlur = {deactivateEditMode} 
                        autoFocus = {true}
                        value = {status}/>
            </div>
        }
    </div>
}

export default ProfileStatusWithHooks;