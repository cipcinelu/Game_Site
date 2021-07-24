import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../../common/FormsControls/FormsControls"
import style from '../../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ profile, handleSubmit,  error }) => {
    return <form onSubmit={handleSubmit}> {/* если форма действительна, он вызовет props.onSubmit(data) 
                                        с содержимым формы данных.  */}
        <div>
            <b>Full name</b>: {
                <div>
                    <Field name='fullName'
                        component={Input}
                        validate={[]}
                        placeholder='Full name'></Field>
                </div>
            }
        </div>
        <div>
            <b>Looking for a job</b>:
            <div>
                <Field type={'checkbox'}
                    name={'lookingForAJob'}
                    component={Input}
                    validate={[]}></Field>
            </div>
        </div>
        <div>
            <b>My professional skills</b>:{
                <div>
                    <Field name='lookingForAJobDescription'
                        component={Textarea}
                        validate={[]}
                        placeholder='My professional skills'></Field>
                </div>
            }
        </div>
        <div>
            <div><b>About me</b>: </div>
            <Field name='aboutMe'
                component={Textarea}
                validate={[]}
                placeholder='About me'></Field>
        </div>
        <div>
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map(key => { // возвращает имена перечисляемых свойств
                return <div key = {key}>
                    <b>{key}: 
                    <Field name= {'contacts.' + key}
                        component={Input}
                        validate={[]}
                        placeholder={key}></Field>
                    </b>
                </div>
            })}
        </div>
        <button>save</button>
        {error && <div className = {style.formSummaryError}>
        {error}
    </div>}
    </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataReduxForm