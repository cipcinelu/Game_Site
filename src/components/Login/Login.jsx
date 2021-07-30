import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import style from './Login.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Captcha from './Captcha'

const LoginForm = (props) => {

    let [error, setError] = useState ();

    return <div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } 
                return errors;
            }}
            onSubmit={(value, actions) => {
                props.login(value.email, value.password, value.rememderMe, value.captcha)// здесь логин это колбек фунция, которая диспатчит вызов санки (та что в конненкте)
                    .then(() => {
                    })
                    .catch ((e) => {
                        setError(e)
                    })
                    .finally(() => {
                        actions.setSubmitting(false);
                    })
            }}>

            {({ isSubmitting }) => ( // возвращает true когда submission в прогрессе
                <Form className={style.form}>
                    <div>
                        <Field type="email" name="email" placeholder={'Email'} /> {/*типо должен совпасть с initialValues  */}
                    </div>
                    <div>
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder={'Password'} />
                    </div>
                    <div>
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>{error}</div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </div>
                    <Captcha captchaUrl = {props.captchaUrl}/>                 
                </Form>
            )}
        </Formik>
    </div>
}

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginForm login = {props.login} captchaUrl={props.captchaUrl} />

    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);