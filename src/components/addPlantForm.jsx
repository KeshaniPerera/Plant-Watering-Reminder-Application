import React, { useState } from 'react';

export const AddPlant = ({ isPopupOpen, onClose, onAddPlant, plantList, setPlantList }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        plantType: '',
        image: null,
        wateringFrequency: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleAddPlant = () => {
        // Create a new plant object with a new ID
        const newPlant = {
            id: plantList.length + 1,  // Assuming `id` is generated based on the list length
            name: formData.name,
            description: formData.description,
            image: formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/150?text=Plant+Image',
            frequency: formData.wateringFrequency,
        };

        // Update the plant list
        setPlantList([...plantList, newPlant]);

        // Call onAddPlant to pass data to parent (optional)
        onAddPlant(newPlant);

        // Reset form fields
        setFormData({
            name: '',
            description: '',
            plantType: '',
            image: null,
            wateringFrequency: '',
        });

        // Close the popup
        onClose();
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            plantType: '',
            image: null,
            wateringFrequency: '',
        });
        onClose();
    };

    if (!isPopupOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-normal">
            <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-green-800">Add a New Plant</h2>
                    <button
                        className="text-red-600 font-bold text-lg"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter plant name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter plant description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Plant Type
                        </label>
                        <input
                            type="text"
                            name="plantType"
                            value={formData.plantType}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter plant type"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Image
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Watering Frequency
                        </label>
                        <select
                            name="wateringFrequency"
                            value={formData.wateringFrequency}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="" disabled>
                                Select frequency
                            </option>
                            <option value="12h">12h</option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                            <option value="5 Days">5 Days</option>
                            <option value="1 Week">1 Week</option>
                        </select>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-green-800 text-white rounded-md w-24"
                            onClick={handleAddPlant}
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-600 text-white rounded-md w-24"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
