const valid = {
    login:{
        email:{
           required: true,
           regex: '',
           in: ['body'],
           errorMessage: 'Email is Required'
        },
        password:{
            required: true,
            in: ['body'],
            errorMessage: 'Password is required',
            custom: true
        }
    }
}
export default valid;
