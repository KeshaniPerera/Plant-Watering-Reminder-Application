import React from 'react';
import { useFormik } from 'formik';
import { PlantvalidationSchema } from '../formValidation.jsx';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ReminderSettings = ({ plants, isPopupOpen, onClose, onSetReminder }) => {
  const formik = useFormik({
    initialValues: {
      plantName: '',
      waterFrequency: '',
    },
    PlantvalidationSchema, 
    validateOnBlur: false,
    onSubmit: (values) => {

      onSetReminder(values);


      toast.success('Reminder time updated!');

      setTimeout(() => {
        onClose(); 
        formik.resetForm(); 
      }, 2000);
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    onClose();
  };

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-normal">
      <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
      />
      <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-green-700">Set Reminder</h2>
          <button
            className="text-red-600 font-bold text-lg"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Select Plant
            </label>
            <select
              name="plantName"
              value={formik.values.plantName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
            >
              <option value="" disabled>
                Choose a plant
              </option>
              {plants.map((plant) => (
                <option key={plant.id} value={plant.name}>
                  {plant.name}
                </option>
              ))}
            </select>
            {formik.touched.plantName && formik.errors.plantName && (
              <div className="text-red-600 text-sm">{formik.errors.plantName}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Water Frequency
            </label>
            <select
              name="waterFrequency"
              value={formik.values.waterFrequency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
            >
              <option value="" disabled>
                Choose a frequency
              </option>
    
              <option value="12h">12h</option>
              <option value="1 Day">1 Day</option>
              <option value="2 Days">2 Days</option>
              <option value="3 Days">3 Days</option>
              <option value="5 Days">5 Days</option>
              <option value="1 Week">1 Week</option>
            </select>
            {formik.touched.waterFrequency && formik.errors.waterFrequency && (
              <div className="text-red-600 text-sm">{formik.errors.waterFrequency}</div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Change
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-yellow-700 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
