import { useState } from 'react';
import { NavBar } from '../components/navBar';
import { Carousel } from '../components/carousel';
import { FaPlus } from 'react-icons/fa';
import { plantData } from '../components/plantList.jsx';
import timer from '../assets/timer.svg';
import { AddPlant } from '../components/addPlantForm.jsx';

export const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [plants, setPlants] = useState(plantData);

    const handleAddPlant = (newPlant) => {
        setPlants((prevPlants) => [...prevPlants, { ...newPlant, id: prevPlants.length + 1 }]);
    };

    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center text-center p-2 pt-0">
                <h1 className="text-mediumGreen font-title">Greener, Smarter & Better</h1>
                <p className="font-normal text-base w-3/4">
                    Keep your plants happy and thriving with timely notifications that make watering effortless.
                    It’s the perfect companion for every plant lover, combining ease and eco-friendliness in one smart solution.
                </p>
                <Carousel />
            </div>

            {/* My Plants Section */}
            <div className="flex gap-6 p-12 items-center">
                <h1 className="text-2xl font-title font-extrabold">My Plants</h1>
                <div
                    className="flex items-center justify-center w-6 h-6 bg-green-800 text-white rounded cursor-pointer"
                    onClick={() => setIsPopupOpen(true)}
                >
                    <FaPlus className="text-xs" />
                </div>
            </div>

            {/* Plant Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-10 pt-0 font-normal">
                {plants.map((plant) => (
                    <div key={plant.id} className="rounded-md p-4 bg-gray-100">
                        <img
                            src={plant.image || 'https://via.placeholder.com/150'}
                            alt={plant.name}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <div className="mt-2 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-green-600">{plant.name}</h2>
                            <span className="text-base font-bold">{plant.plantType || 'Unknown'}</span>
                        </div>

                        {/* Timer and Water Info */}
                        <div className="mt-4 bg-white rounded-lg p-4 shadow">
                            <div className="flex items-start gap-3">
                                {/* Timer Icon */}
                                <div className="w-12 h-12 bg-lightBrown rounded flex items-center justify-center">
                                    <img src={timer} alt="Timer" className="w-6 h-6" />
                                </div>
                                {/* Watering Information */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-800 text-sm font-semibold">Last Watered     </span>
                                        <span> - </span>
                                        <span className="text-green-600 text-sm font-semibold text-right">
                                            Yesterday
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-gray-800 text-sm font-semibold">Next Water</span>
                                        <span>-</span>
                                        <span className="text-blue-600 text-sm font-semibold text-right">
                                            5 Hours
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Plant Popup */}
            <AddPlant
                isPopupOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onAddPlant={handleAddPlant}
                plantList={plants}
                setPlantList={setPlants} // Ensure plantList is passed to the form
            />
        </>
    );
};
