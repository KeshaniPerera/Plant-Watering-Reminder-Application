import { Link } from 'react-router-dom';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi'; 
import logo from '../assets/logo.svg';

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-2">
            <Link to="/home">
                <img src={logo} className="w-48 mt-2 md:ml-2" alt="logo" />
            </Link>

            <nav className="flex items-center gap-8">
                <Link to="/settings" className="flex justify-center items-center w-8 h-8 bg-black text-white rounded-full hover:bg-gray-800">
                    <FiSettings className="md:text-xl text-base" />
                </Link>

                <Link to="/notifications" className="flex justify-center items-center w-8 h-8 mr-4 bg-black text-white rounded-full hover:bg-gray-800">
                    <FiBell className="md:text-xl text-base" />
                </Link>

                <div className="flex items-center gap-2 hidden md:flex">
                    <FiUser className="text-2xl text-black" />
                    <span className="text-base fon-normal text-black mr-8">Keshani Perera</span>
                </div>
            </nav>
        </div>
    );
};
