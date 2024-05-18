import { StaticImageData } from "next/dist/shared/lib/image-external";
import algodon from "./images/algodonlalu.jpg";
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
        img: algodon,
        title: "Conjunto de algodón",
        brand: "Lalu",
        price: 6800,
    },
    {
        id: 2,
        img: melifera,
        title: "Conjunto talle-115",
        brand: "Melifera",
        price: 6800,
    }
] as const;