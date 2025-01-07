import aloe from '../assets/aloe_plant.jpeg';
import epipremnum from '../assets/Epipremnum_aureum_plant.jpeg';
import orchid from '../assets/orchid_plant.jpeg';
import lily from '../assets/peace_lily_plant.jpeg';
import rose from '../assets/rose_plant.jpeg';
import spider from '../assets/spider_plant.jpeg';


export const plantData = [
    {
        id: 1,
        name: "Aloe Vera",
        plantType: "Succulent",
        description: "Aloe Vera is a succulent plant known for its medicinal properties and low maintenance.",
        image: aloe,
        frequency: "12h",

    },
    {
        id: 2,
        name: "Rose",
        plantType: "Perennial",
        description: "Roses are beautiful flowering plants known for their colorful blooms and fragrant scent. They require regular watering, sunlight, and occasional pruning to maintain their beauty.",
        image: rose,
        frequency: "24h",
    },
    {
        id: 3,
        name: "Peace Lily",
        plantType: "Perennial",
        description: "Peace Lilies are elegant plants with white flowers, perfect for adding a touch of class to any room.",
        image: lily,
        frequency: "12h",
    },
    {
        id: 4,
        name: "Spider Plant",
        plantType: "Perennial",
        description: "Spider Plants are hardy indoor plants that thrive in low light and are easy to care for. Known for their long, arching leaves and babies,they help improve air quality.",
        image: spider,
        frequency: "12h",
    },
    {
        id: 5,
        name: "Orchid",
        plantType: "Perennial",
        description: "Orchids are tropical plants known for their stunning, exotic flowers. They require moderate sunlight and humidity and need careful watering to avoid overwatering.",
        image: orchid,
        frequency: "12h",
    },
];
