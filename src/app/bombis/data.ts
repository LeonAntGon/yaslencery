import { StaticImageData } from "next/dist/shared/lib/image-external";
import packxthree from "./images/colalespackx3.jpg";
import regulableone from "./images/regulables.jpg";
import vedentinamodal from "./images/vedentinatelmodal.png"


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
        img: packxthree,
        title: "Colaless de algodón pack x3",
        brand: "Hasta talle 40",
        price: 3000,
    },
    {
        id: 2,
        img: regulableone,
        title: "Regulables",
        brand: " ",
        price: 1000,
    },
    {
        id: 3,
        img: vedentinamodal,
        title: "Vedetinas tela modal",
        brand: "Talle 38 y 40",
        price: 1100,
    }
] as const;