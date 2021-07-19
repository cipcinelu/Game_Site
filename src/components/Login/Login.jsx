import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}> {/*при нажатии на форму запускает функцию обработчик*/}
    <div>
        <Field placeholder = {'Email'} 
                name = {'email'}   
                component = {Input}
                validate={[required]}></Field>
    </div>
    <div>
        <Field placeholder = {'Password'} 
                name = {'password'} 
                type = {'password'} 
                component = {Input}
                validate={[required]}></Field>
    </div>
    <div>
        <Field type = {'checkbox'} name = {'rememberMe'} component = {Input}/>remember me
    </div>
    {props.error && <div className = {style.formSummaryError}>
        {props.error}
    </div>}
    <div>
        <button>Login</button> {/*пока кнопка в форме, она по дефолту перезагружает страницу*/}
    </div>
</form>
}

const LoginReduxForm = reduxForm 
                    ({form: 'login'}) //название
                    (LoginForm) // компанента

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememderMe)
    }// здесь логин это колбек фунция, которая диспатчит вызов санки (та что в конненкте)
    if (props.isAuth) {
        return <Redirect to = {'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);