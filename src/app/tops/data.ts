import { StaticImageData } from "next/dist/shared/lib/image-external";
import topvone from "./images/topvmood1.jpg";
import toopvtwo from "./images/topvmood2.jpg";
import toptiras  from "./images/topcontiras.jpg";
import topdlirio from "./images/topdlirio.jpg";


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
        img: topvone,
        title: "Top V",
        brand: "MOOD",
        price: 6700,
    },
    {
        id: 2,
        img: toopvtwo,
        title: "Top V",
        brand: "MOOD",
        price: 6700,
    },
    {
        id: 3,
        img: toptiras,
        title: "Vedetinas tela modal",
        brand: " ",
        price: 5000,
    },
    {
        id: 4,
        img: topdlirio,
        title: "Top deportivo",
        brand: "D'LIRIO ",
        price: 5000,
    }
] as const;