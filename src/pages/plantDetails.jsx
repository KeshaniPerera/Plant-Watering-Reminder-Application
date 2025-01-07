import { useParams } from 'react-router-dom';
import { plantData } from '../components/plantList.jsx';
import { WateringStreakChart } from '../components/wateringStreakChart.jsx';
import { ProgressBar } from '../components/progressBars.jsx';

export const PlantDetails = () => {
    const { id } = useParams(); 
    console.log("ID from URL:", id); 

    const plantId = parseInt(id, 10);
    const plant = plantData.find((plant) => plant.id === plantId);

    if (!plant) {
        return <h1 className="text-center text-2xl font-semibold mt-10">Plant not found</h1>;
    }

    return (
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 p-10 lg:p-8 min-h-screen md:ml-24 md:mr-24 font-normal">
            <div className="lg:w-1/2 flex flex-col items-center">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-auto max-w-sm shadow-md transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
                />
                <div className="mt-6 w-full flex justify-center">
                    <ProgressBar />
                </div>
            </div>

            <div className="lg:w-1/2 mt-6 lg:mt-0">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-title font-extrabold text-green-600">{plant.name}</h1>
                        <span className="text-base font-semibold">{plant.plantType}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{plant.description}</p>

                    <p className="text-gray-800 font-medium">
                        Water Frequency: <span className="text-gray-600 ml-8">{plant.frequency}</span>
                    </p>

                    <WateringStreakChart />
                </div>
            </div>
        </div>
    );
};
