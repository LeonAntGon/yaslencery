import { StaticImageData } from "next/dist/shared/lib/image-external";


import toptiras  from "@/public/tops/topcontiras.jpg"
import topdlirio from "@/public/tops/topdlirio.jpg";
import topvone from "@/public/tops/topvmood.jpg";

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
        img: toptiras,
        title: "Vedetinas tela modal",
        brand: " ",
        price: 5000,
    },
    {
        id: 2,
        img: topdlirio,
        title: "Top deportivo",
        brand: "D'LIRIO ",
        price: 5000,
    },
    {
        id: 3,
        img: topvone,
        title: "Top V- Talle2 coral y gris - Talle 3 rosa y negra",
        brand: "MOOD fit",
        price: 6700,
    },
] as const;