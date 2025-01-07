import { FaPlus, FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import { AddPlant } from '../components/addPlantForm.jsx';
import { ReminderSettings } from '../components/reminderSettingsForm.jsx';
import { useNavigate } from 'react-router-dom'; 

import { NavBar } from '../components/navBar';
import { plantData } from '../components/plantList.jsx';
import { useState } from 'react';

export const Settings = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isReminderPopupOpen, setIsReminderPopupOpen] = useState(false);
  const [plants, setPlants] = useState(plantData);

  const navigate = useNavigate(); 

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, { ...newPlant, id: prevPlants.length + 1 }]);
  };

  const handleSetReminder = (values) => {
    console.log('Reminder Set:', values);
 
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <>
      <NavBar />
      <h1 className="text-center mt-4 font-normal text-2xl">Settings</h1>

      <div className="flex flex-col gap-8 p-4 font-normal justify-start md:w-1/2 mx-auto">
   
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        >
          <div className="flex items-center justify-center w-6 h-6 mb-2 mr-4 bg-green-800 text-white rounded">
            <FaPlus className="text-xs" />
          </div>
          <h1 className="text-base font-normal font-extrabold">Add Plants</h1>
        </div>
        <AddPlant
          isPopupOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onAddPlant={handleAddPlant}
          plantList={plants}
          setPlantList={setPlants}
        />

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsReminderPopupOpen(true)}
        >
          <div className="flex items-center justify-center w-6 h-6 mb-2 mr-4 bg-green-800 text-white rounded">
            <FaCog className="text-xs" />
          </div>
          <h1 className="text-base font-normal font-extrabold">Reminder Settings</h1>
        </div>
        <ReminderSettings
          plants={plants}
          isPopupOpen={isReminderPopupOpen}
          onClose={() => setIsReminderPopupOpen(false)}
          onSetReminder={handleSetReminder}
        />

    
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogout}
        >
          <div className="flex items-center justify-center w-6 h-6 mb-2 mr-4 bg-green-800 text-white rounded">
            <FaSignOutAlt className="text-xs" /> 
          </div>
          <h1 className="text-base font-normal font-extrabold">Log Out</h1>
        </div>
      </div>
    </>
  );
};
