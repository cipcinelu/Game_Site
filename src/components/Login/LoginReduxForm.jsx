import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}> {/*при нажатии на форму запускает функцию обработчик*/}
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
    {captchaUrl && <img src = {captchaUrl} alt = 'нет фото'/>}
    {captchaUrl && <Field placeholder = {'Input captcha'} 
                        name = {'captcha'} 
                        type = {'captcha'} 
                        component = {Input}
                        validate={[required]}></Field>}
    {error && <div className = {style.formSummaryError}>
        {error}
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
        props.login(formData.email, formData.password, formData.rememderMe, formData.captcha)
    }// здесь логин это колбек фунция, которая диспатчит вызов санки (та что в конненкте)
    if (props.isAuth) {
        return <Redirect to = {'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit} captchaUrl = {props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect (mapStateToProps, {login}) (Login);