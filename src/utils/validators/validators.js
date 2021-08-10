export const required = value => {
    if (value) return undefined;
    return'empty'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return 'Max length is '+ maxLength;
    return undefined
}

export const validateTextArea = (values) => {
    const errors = {}
    if (values.message.length > 50) {
        errors.message = 'Max length is 50';
    }  
    if (!values.message) {
        errors.message = 'Required';
    } 
    return errors
}