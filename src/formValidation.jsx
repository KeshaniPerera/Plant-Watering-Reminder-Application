import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('* Required'),
    password: Yup.string().min(6, 'Minimum 6 Characters').required('* Required'),
    firstName: Yup.string().required('* Required'),
    lastName: Yup.string().required('* Required'),
    retypePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords not matching').required('* Required')
});