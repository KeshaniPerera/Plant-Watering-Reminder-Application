import { Link } from 'react-router-dom';
import { FiSettings, FiBell, FiUser } from 'react-icons/fi'; // Importing icons
import logo from '../assets/logo.svg';

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-2">
            {/* Logo on the left */}
            <Link to="/home">
                <img src={logo} className="w-48 mt-2 md:ml-2" alt="logo" />
            </Link>

            {/* Navigation icons and user section on the right */}
            <nav className="flex items-center gap-8">
                {/* Settings Icon */}
                <Link to="/settings" className="flex justify-center items-center w-8 h-8 bg-black text-white rounded-full hover:bg-gray-800">
                    <FiSettings className="text-xl" />
                </Link>

                {/* Notifications Icon */}
                <Link to="/notifications" className="flex justify-center items-center w-8 h-8 bg-black text-white rounded-full hover:bg-gray-800">
                    <FiBell className="text-xl" />
                </Link>

                {/* User Section */}
                <div className="flex items-center gap-2">
                    <FiUser className="text-2xl text-black" /> {/* User Icon */}
                    <span className="text-base fon-normal text-black mr-8">Keshani Perera</span>
                </div>
            </nav>
        </div>
    );
};
