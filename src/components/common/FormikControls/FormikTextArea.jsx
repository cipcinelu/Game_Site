import { ErrorMessage, Field, Form, Formik } from "formik";
import { validateTextArea } from "../../../utils/validators/validators";


const FormikTextArea = (props) => {
    return (
        <div>
        <Formik
            initialValues={{ message: '' }}
            validate={validateTextArea}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                props.submit(values.message)
                setSubmitting(false);
                resetForm();
            }}>
            {({ isSubmitting }) => ( // возвращает true когда submission в прогрессе
                <Form>
                    <div>
                        <Field as = 'textarea' 
                            type="message" 
                            name="message" 
                            placeholder={'Message'} /> {/*типо должен совпасть с initialValues  */}
                    </div>
                    <div>
                        <ErrorMessage name="message" component="div" />
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Send
                        </button>
                    </div>           
                </Form>
            )}
        </Formik>
        </div>
    )
}

export default FormikTextArea