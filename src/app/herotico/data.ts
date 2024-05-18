import { StaticImageData } from "next/dist/shared/lib/image-external";
import tirantesred from "./images/tirantesred.jpg";




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
        img: tirantesred,
        title: "❤️",
        brand: " ",
        price: 1900,
    },

] as const;