import { Input, Textarea } from "../../../common/FormsControls/FormsControls"
import style from '../../../common/FormsControls/FormsControls.module.css'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateTextArea } from "../../../../utils/validators/validators"

const ProfileDataForm = ({ profile, error, ...props }) => {
    return (<Formik
        initialValues={{ fullName: profile.fullName,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        aboutMe: profile.aboutMe,
                        contacts: profile.contacts}}
        validate={values => {
            const errors = {}
            const textEmail = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
            if (!values.fullName) {
                errors.fullName = 'Required'
            }

            for (let link in values.contacts) {
                if (!!values.contacts[link]) {
                    if (!textEmail.test (values.contacts[link])) {
                        errors.contacts = 'Wronk link'
                    }
                }
            }
            return errors
        }}        
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log (values)
            props.onSubmit(values)
            setSubmitting(false);
            resetForm();
        }}>
{({ isSubmitting, isValid }) => ( // возвращает true когда submission в прогрессе
<Form>
        <div>
            <b>Full name</b>: {
                <div>
                    <Field name='fullName'
                        type="fullName" 
                        placeholder='Full name'></Field>  
                    <ErrorMessage name="fullName" component="div" />
                </div>
            }
        </div>
        <div>
            <b>Looking for a job</b>:
            <div>
                <Field type={'checkbox'}
                    name={'lookingForAJob'}
                ></Field>
            </div>
        </div>
        <div>
            <b>My professional skills</b>:{
                <div>
                    <Field name='lookingForAJobDescription'
                        type="lookingForAJobDescription" 
                        placeholder='My professional skills'></Field>
                </div>
            }
        </div>
        <div>
            <div><b>About me</b>: </div>
            <Field name='aboutMe'
                type="aboutMe" 
                placeholder='About me'></Field>
        </div>
        <div>
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map(key => { // возвращает имена перечисляемых свойств
                return <div key = {key}>
                    <b>{key}: 
                    <div>
                    <Field name= {'contacts.' + key}
                        type={'contacts.' + key}
                        placeholder={key}
                        ></Field>
                    </div>
                    </b>
                </div>
            })
            }
            <ErrorMessage name='contacts' component="div"/>                 
        </div>
        <button type="submit" disabled={isSubmitting}>save</button>
</Form>)}
    </Formik>
)}

export default ProfileDataForm