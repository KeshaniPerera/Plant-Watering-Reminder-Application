import logo from '../assets/logo.svg';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginvalidationSchema } from '../formValidation.jsx';

const initialValues = {
    email: '',
    password: '',
};

export const LogIn = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: loginvalidationSchema,
        validateOnBlur: true, 
        validateOnChange: true, 
    });

    const handleLogin = () => {
        if (Object.keys(formik.errors).length > 0) {
            console.log('Validation Errors:', formik.errors);
            return;
        }
        console.log('Submitted Values:', formik.values);
        navigate('/home'); 
    };

    return (
        <>
            <img src={logo} className="w-48 mt-2 md:ml-2" alt="logo" />
            <h1 className="font-title justify-self-center mt-8 md:mt-1 text-xl md:text-3xl font-bold">
                Log in to GreenLife
            </h1>
            <p className="mt-2 mb-4 justify-self-center w-3/4 md:w-1/2 text-center text-xs md:text-sm font-normal">
                Water is essential for life! Green Life provides you customized reminders to water your plants and
                keep them alive with your love. Go! login, your plants need you.
            </p>

            <div className="justify-self-center bg-lightGreen w-3/4 lg:w-1/3 rounded-lg p-8 font-normal">
                <div className="space-y-6">
                    <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-300">
                        <FaUser className="ml-3 mr-3" />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            className="w-full p-3 h-12 focus:outline-none"
                        />
                    </div>
                    {formik.errors.email && formik.touched.email && (
                        <p className="text-red-500 text-xs p-2 m-0">{formik.errors.email}</p>
                    )}

                    <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-300">
                        <FaLock className="ml-3 mr-3" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            className="w-full p-3 h-12 focus:outline-none"
                        />
                    </div>
                    {formik.errors.password && formik.touched.password && (
                        <p className="text-red-500 text-xs p-2 m-0">{formik.errors.password}</p>
                    )}

                    <button
                        onClick={handleLogin}
                        type="button"
                        className="w-full bg-green-600 h-12 text-white py-3 flex items-center justify-center rounded-lg font-medium hover:bg-green-800 transition duration-300"
                    >
                        CONTINUE
                    </button>
                    <div className="flex items-center justify-center mt-4 text-gray-700">
                        <span className="border-t border-gray-300 flex-grow"></span>
                        <span className="mx-4 text-xs md:text-sm">Don’t have a GreenLife Account?</span>
                        <span className="border-t border-gray-300 flex-grow"></span>
                    </div>
                    <button
                        onClick={() => navigate('/signup')}
                        type="button"
                        className="w-full border-2 h-12 flex items-center justify-center border-green-600 text-green-600 bg-white py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
                    >
                        SIGN UP
                    </button>
                </div>
            </div>
        </>
    );
};
