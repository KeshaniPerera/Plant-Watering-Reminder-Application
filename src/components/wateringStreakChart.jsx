import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

//components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const WateringStreakChart = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const wateringData = [10, 0, 1, 2, 3, 0, 1];

    const data = {
        labels: days,
        datasets: [
            {
                label: 'Watering Streak (Days)',
                data: wateringData,
                backgroundColor: 'rgba(34, 139, 34, 0.7)',
                borderColor: 'rgba(34, 139, 34, 1)', 
                borderWidth: 1,
                barPercentage: 0.5, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333',
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#333', 
                    stepSize: 1,
                },
                grid: {
                    display: false, 
                },
            },
            y: {
                ticks: {
                    color: '#333', 
                    beginAtZero: true,
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.3)',
                },
            },
        },
        elements: {
            bar: {
                borderRadius: { topLeft: 5, topRight: 5, bottomLeft: 5, bottomRight: 5 }, 
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Watering Streak Chart</h2>
            <div className="w-full h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};
