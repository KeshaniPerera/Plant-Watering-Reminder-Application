import { useState } from 'react';
import { NavBar } from '../components/navBar';
import favicon  from '../assets/favicon.png';
import orchid from '../assets/orchid_plant.jpeg';
import lily from '../assets/peace_lily_plant.jpeg';
import rose from '../assets/rose_plant.jpeg';
import spider from '../assets/spider_plant.jpeg';



export const Notifications = () => {
    const [reminders, setReminders] = useState([
        { id: 1, message: "Hey! Water your rose in 1 hour", image: rose, type: "reminder" },
        { id: 2, message: "You forgot to water the spider plant... it's waiting for you", image: spider, type: "missed" },
        { id: 3, message: "Time to water your lily, don't forget it!",image: lily, type: "reminder" },
        { id: 4, message: "New update available!", image: favicon, type: "system" },
        { id: 5, message: "Water your orchid now! It's getting dry", image: orchid, type: "missed" }
    ]);

    const handleCloseReminder = (id) => {
        setReminders(reminders.filter(reminder => reminder.id !== id));
    };

    const getBackgroundColor = (type) => {
        switch (type) {
            case 'reminder':
                return 'bg-green-100'; 
            case 'missed':
                return 'bg-red-100';
            case 'system':
                return 'bg-gray-100'; 
            default:
                return 'bg-gray-100';
        }
    };

    return (
        <>
            <NavBar />

            <h1 className="text-center mt-4 font-normal text-2xl">Notifications</h1>

            <div className="flex flex-col gap-4 p-4 font-normal md:w-1/2 justify-center mx-auto">
                {reminders.map((reminder) => (
                    <div key={reminder.id} className={`flex items-center p-4 rounded-lg ${getBackgroundColor(reminder.type)}`}>
                        <img src={reminder.image} alt="Plant" className="w-16 h-16 rounded-full object-cover" />
                        
                        <div className="ml-4 text-sm">
                            <p>{reminder.message}</p>
                        </div>
                        
                        <button
                            onClick={() => handleCloseReminder(reminder.id)}
                            className="ml-auto text-gray-600 hover:text-gray-900"
                        >
                            <span className="font-bold text-xl">×</span>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};
