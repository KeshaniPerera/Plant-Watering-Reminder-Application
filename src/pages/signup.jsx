import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import {validationSchema } from '../formValidation.jsx';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: ''
}

export const SignUp = () => {
    const navigate = useNavigate();

    const {values, handleBlur, handleChange, handleSubmit, errors}= useFormik({
        initialValues:initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values);
        }
    })
    
    return (
        <>
            <img src={logo} className={'w-48 mt-2 md:ml-2'} alt="logo" />
            <h1 className={'font-title justify-self-center mt-8 md:mt-1 text-xl md:text-3xl font-bold'}>Sign Up to GreenLife</h1>
            <p className={'mt-2 mb-4 justify-self-center w-3/4 md:w-1/2 text-center text-xs md:text-sm font-normal'}>
                Hey nature lover, sign up with us for a greener lifestyle.
            </p>

            <div className="justify-self-center bg-lightGreen w-3/4 lg:w-1/3 rounded-lg p-8 font-normal  mb-8">
                <form className="space-y-6">
                    {/* First Name and Last Name Row */}
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label htmlFor="firstName" className="block text-xs  font-medium pb-2 text-gray-600">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                value={values.firstName}
                                onBlur={handleBlur}
                                className="w-full border h-10 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                            />
                            {errors.firstName && <p className="text-red-500 text-xs p-2 ">{errors.firstName}</p>}
                        </div>
                        <div className="flex-1">
                        <label htmlFor="lastName" className="block text-xs  font-medium pb-2 text-gray-600">Last Name</label>
                        <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                value={values.lastName}
                                onBlur={handleBlur}
                                className="w-full border h-10 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                            />
                        {errors.lastName && <p className="text-red-500 text-xs p-2 ">{errors.lastName}</p>}

                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                    <label htmlFor="email" className="block text-xs font-medium  pb-2 text-gray-600">Email</label>
                    <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                            className="w-full border rounded-lg p-3 h-10 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                        />
                    {errors.email && <p className="text-red-500 text-xs p-2 ">{errors.email}</p>}

                    </div>

                    {/* Password Field */}
                    <div>
                    <label htmlFor="password" className="block text-xs  font-medium pb-2 text-gray-600">Password</label>
                    <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                            className="w-full border rounded-lg p-3 h-10 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                        />
                    {errors.password && <p className="text-red-500 text-xs p-2 ">{errors.password}</p>}

                    </div>

                    {/* Retype Password Field */}
                    <div>
                    <label htmlFor="retypePassword" className="block text-xs  font-medium pb-2 text-gray-600">Confirm Paasword</label>
                    <input
                            type="password"
                            id="retypePassword"
                            name="retypePassword"
                            onChange={handleChange}
                                value={values.retypePassword}
                                onBlur={handleBlur}
                            className="w-full border rounded-lg p-3 h-10 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                        />
                    {errors.retypePassword && <p className="text-red-500 text-xs p-2 ">{errors.retypePassword}</p>}

                    </div>

                    {/* Continue Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 h-10 text-white py-3 flex items-center justify-center rounded-lg font-medium hover:bg-green-800 transition duration-300"
                    >
                        CONTINUE
                    </button>

                    {/* Divider and Login Button */}
                    <div className="flex items-center justify-center mt-4 text-gray-700">
                        <span className="border-t border-gray-300 flex-grow"></span>
                        <span className="mx-4 text-xs md:text-sm">Already have a GreenLife Account?</span>
                        <span className="border-t border-gray-300 flex-grow"></span>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        type="button"
                        className="w-full border-2 h-10 flex items-center justify-center border-green-600 text-green-600 bg-white py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </>
    );
};
