import React from 'react';
import { useFormik } from 'formik';
import { PlantvalidationSchema } from '../formValidation.jsx';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AddPlant = ({ isPopupOpen, onClose, onAddPlant }) => {
  
  const formik = useFormik({
    initialValues: {
      plantName: '',
      plantDescription: '',
      plantType: '',
      plantImage: null,
      plantFrequency: '', 
    },
    PlantvalidationSchema,
    validateOnBlur: false,
    onSubmit: (values) => {
      const newPlant = {
        id: new Date().getTime(), 
        name: values.plantName,
        description: values.plantDescription,
        plantType: values.plantType,
        image: values.plantImage
          ? URL.createObjectURL(values.plantImage)
          : 'https://via.placeholder.com/150?text=Plant+Image',
        frequency: values.plantFrequency,
      };

      onAddPlant(newPlant); 
      toast.success('New Plant Added!');

      setTimeout(() => {
        onClose(); 
        formik.resetForm(); 
      }, 2000);
    },
  });

  const handleFileChange = (e) => {
    formik.setFieldValue('plantImage', e.target.files[0]);
  };
  
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
          <h2 className="text-lg font-bold text-green-700">Add a New Plant</h2>
          <button
            className="text-red-600 font-bold text-lg"
            onClick={handleCancel} 
          >
            ✕
          </button>
        </div>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="plantName"
              value={formik.values.plantName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
              placeholder="Enter plant name"
            />
            {formik.touched.plantName && formik.errors.plantName && (
              <div className="text-red-600 text-sm">{formik.errors.plantName}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="plantDescription"
              value={formik.values.plantDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
              placeholder="Enter plant description"
            />
            {formik.touched.plantDescription && formik.errors.plantDescription && (
              <div className="text-red-600 text-sm">{formik.errors.plantDescription}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Type
            </label>
            <input
              type="text"
              name="plantType"
              value={formik.values.plantType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
              placeholder="Enter plant type"
            />
            {formik.touched.plantType && formik.errors.plantType && (
              <div className="text-red-600 text-sm">{formik.errors.plantType}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Watering Frequency
            </label>
            <select
              name="plantFrequency"
              value={formik.values.plantFrequency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select watering frequency</option>
              <option value="12h">12h</option>
              <option value="1 Day">1 Day</option>
              <option value="2 Days">2 Days</option>
              <option value="3 Days">3 Days</option>
              <option value="5 Days">5 Days</option>
              <option value="1 Week">1 Week</option>
            </select>
            {formik.touched.plantFrequency && formik.errors.plantFrequency && (
              <div className="text-red-600 text-sm">{formik.errors.plantFrequency}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              name="plantImage"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Add Plant
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
