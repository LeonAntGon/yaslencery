import { StaticImageData } from "next/dist/shared/lib/image-external";

import packxthree from "./images/colalespackx3.jpg";
import regulableone from "./images/regulables.jpg";
import vedentinamodal from "./images/vedentinatelmodal.png"
import combovedcolreg from "./images/Vedetinas XL 1500- Colaless XL 1500 - Regulables grande único 1300 _2x2000.png"
import culoteencaje from './images/culote de encajes - odet - 4000.jpg'


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
    },
    {
        id: 4,
        img: combovedcolreg,
        title: "Vedentinas - Colales - Regulables",
        brand: " Regulables 2x2000",
        price: "1500 - $1500 - $1300 ",
    },
    {
        id: 5,
        img: culoteencaje,
        title: "Culotes de encaje",
        brand: " Odet",
        price: 4000,
    }
] as const;