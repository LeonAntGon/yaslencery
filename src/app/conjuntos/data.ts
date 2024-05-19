import { StaticImageData } from "next/dist/shared/lib/image-external";

import algodon from "./images/algodonlalu.jpg";
import redalgodon from './images/Rojo T90 de algodon - Agostina.jpg';
import aquaalg from './images/Aqua T90 de algodon - Cloe jazmín.jpg';
import whitealg from './images/blanco T95 algodon - Agostina - 4900.jpg';
import encajymicrof from './images/Encaje y microfibra - New sensation.jpg';
import blackalg from './images/negro T95 de algodon - new sensation - 6000.jpg';
import blackenc from './images/negro T100 encaje sin arco - New sensation.jpg';
import melifera from "./images/melifera.jpg";

interface products {
    id: number;
    img: string  | StaticImageData; // Change 'image' to 'img' for consistency with your usage
    title: string;
    brand: string;
    price: number;
}

export const products= [
    {
        id: 1,
        img: blackenc,
        title: "Conjunto de encaje sin arco",
        brand: "New sensation",
        price: 6000,
        
    },
    {
        id: 2,
        img: blackalg,
        title: "Conjunto de algodón negro - Talle 95",
        brand: "New sensation",
        price: 6000,
    },
    {
        id: 3,
        img: aquaalg,
        title: "Conjunto de algodón aqua Talle 90 ",
        brand: "Cloe jazmín",
        price: " ",
    },
    {
        id: 4,
        img: whitealg,
        title: "Conjunto de algodón blanco Talle 95",
        brand: "Agostina",
        price: 4900,
    },
    
    {
        id: 5,
        img: algodon,
        title: "Conjunto de algodón",
        brand: "Lalu",
        price: 6800,
    },
    {
        id: 6,
        img: redalgodon,
        title: "Conjunto de algodón rojo Talle 90",
        brand: "Lalu",
        price: 6800,
    },
    {
        id: 7,
        img: encajymicrof,
        title: "Conjunto de encaje y microfibra",
        brand: "New sensation",
        price: " ",
    },
    {
        id: 8,
        img: melifera,
        title: "Conjunto talle-115",
        brand: "Melifera",
        price: 6800,
    },
] as const;