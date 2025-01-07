import * as Yup from 'yup';

export const loginvalidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('* Required'),
    password: Yup.string().min(6, 'Minimum 6 Characters').required('* Required'),
   

});

export const SignupvalidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('* Required'),
    password: Yup.string().min(6, 'Minimum 6 Characters').required('* Required'),
    firstName: Yup.string().required('* Required'),
    lastName: Yup.string().required('* Required'),
    retypePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords not matching').required('* Required'),


});

export const PlantvalidationSchema = Yup.object({
    plantName: Yup.string().required('* Required'),
    plantType: Yup.string().required('* Required'),
    plantDescription: Yup.string().required('* Required'),
    plantImage: Yup.mixed().required('* Required'),
    plantFrequency: Yup.string().required('* Required')

});