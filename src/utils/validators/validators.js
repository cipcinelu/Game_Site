export const required = value => {
    if (value) return undefined;
    return'empty'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return 'Max length is '+ maxLength;
    return undefined
}
