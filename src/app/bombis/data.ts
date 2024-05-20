import { StaticImageData } from "next/dist/shared/lib/image-external";

import packxthree from "@/public/bombis/colalespackx3.jpg";
import regulableone from "@/public/bombis/regulables.jpg";
import vedentinamodal from "@/public/bombis/vedentinatelmodal.png";
import combovedcolreg from "@/public/bombis/lostresproductos.png";
import culoteencaje from '@/public/bombis/culote_encajesodet.jpg';


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
        title: " Todos talles XL",
        brand: "Vedentinas - Colales - Regulables \n   2 X   -   2 X   -    2 X",
        price: "3000 - $3000 - $2000 ",
    },
    {
        id: 5,
        img: culoteencaje,
        title: "Culotes de encaje",
        brand: " Odet",
        price: 4000,
    }
] as const;