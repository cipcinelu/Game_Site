import { Field } from "formik"
import { connect } from "react-redux"
import { getCaptchaUrl } from "../../redux/authReducer"

const Captcha = (props) => {
    return <div>
        <div>
            {props.captchaUrl &&
                <img onClick = {props.getCaptchaUrl} src={props.captchaUrl} alt='нет фото' />}
        </div>
        <div>
            {props.captchaUrl &&
                <Field placeholder='Input captcha'
                    name={'captcha'}
                    type={'captcha'}></Field>}
        </div>
    </div>
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps, {getCaptchaUrl}) (Captcha)