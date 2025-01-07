import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/navBar';
import { HomePageContent } from '../components/homePageContent.jsx';
import { PlantDetails } from './plantDetails.jsx';

export const Home = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePageContent />} />
                <Route path="/plantDetails/:id" element={<PlantDetails />} />
            </Routes>
        </>
    );
};
