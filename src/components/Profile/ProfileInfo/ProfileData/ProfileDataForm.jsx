import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import { Box, Button, Checkbox, makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    button: {
      marginTop: '2%',
    },
}));


const ProfileDataForm = ({ profile, error, ...props }) => {
    const formik = useFormik({
        initialValues: { fullName: profile.fullName,
                        lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        aboutMe: profile.aboutMe,
                        contacts: profile.contacts
        },
        validate: (values) => {
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
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log (values)
            props.onSubmit(values)
            setSubmitting(false);
            resetForm();
    },
})

    const styleUI = useStyles()

    return (
//({ isSubmitting, isValid }) => ( // возвращает true когда submission в прогрессе
<form onSubmit={formik.handleSubmit}>
        <div>
         {
            <div>
                <TextField label = 'Full Name'
                        name='fullName'
                        id="fullName" 
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        error = {formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}/>
            </div>
            }
        </div>

        <div>
            <Box component = "b">Looking for a job</Box>:
            <Checkbox name={'lookingForAJob'}
                    id = 'lookingForAJob'
                    checked={formik.values.lookingForAJob}
                    onChange={formik.handleChange}/>
        </div>
        <div>
                <TextField name='lookingForAJobDescription'
                    id="lookingForAJobDescription" 
                    label = 'My professional skills'
                    value={formik.values.lookingForAJobDescription}
                    onChange={formik.handleChange}/>
        </div>
        <div>
            <TextField name='aboutMe'
                id="aboutMe" 
                label = 'About me'
                value={formik.values.aboutMe}
                onChange={formik.handleChange}></TextField>
        </div>
        <div>
            <Box component = "b">Contacts</Box>:
            {Object.keys(profile.contacts).map(key => { // возвращает имена перечисляемых свойств
                return <div key = {key}>
                    <TextField name= {'contacts.' + key}
                        id={'contacts.' + key}
                        label = {key}
                        value={formik.values.contacts[key]}
                        onChange={formik.handleChange}
                        error = {formik.touched.contacts && Boolean(formik.errors.contacts)}
                        helperText={formik.touched.contacts && formik.errors.contacts}>
                    </TextField>
                </div>
            })} 
        </div>

        <Button variant = 'contained' 
                type="submit"
                //disabled={isSubmitting}
                color="primary"
                size = 'small'
                className = {styleUI.button}>save</Button>
</form>
)}

export default ProfileDataForm