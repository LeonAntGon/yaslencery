import { StaticImageData } from "next/dist/shared/lib/image-external";

import algodon from "@/public/conjuntos/algodonlalu.jpg";
import redalgodon from '@/public/conjuntos/RojoT90algodon-Agostina.jpg';
import aquaalg from '@/public/conjuntos/AquaT90dealgodon-Cloejazmín.jpg';
import whitealg from '@/public/conjuntos/blanco95newsensation.jpg';
import encajymicrof from '@/public/conjuntos/Encajeymicrofibra-Newsensation.jpg';
import blackalg from '@/public/conjuntos/blancoT95algodon-Agostina-4900.jpg';
import blackenc from '@/public/conjuntos/negrot100encajenoarco.jpg';
import melifera from "@/public/conjuntos/melifera.jpg";

interface products {
    id: number;
    img: string  | StaticImageData; // Change 'image' to 'img' for consistency with your usage
    title: string;
    brand: string;
    price: number;
}

export const products = [
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
      title: "Conjunto de algodón negro",
      brand: "Talle 95 -New sensation",
      price: 6000,
    },
    {
      id: 3, 
      img: whitealg,
      title: "Conjunto de algodón blanco",
      brand: "Talle 95 - Agostina",
      price: 4900,
    },
    {
      id: 4, 
      img: algodon,
      title: "Conjunto de algodón",
      brand: "Lalu",
      price: 6800,
    },
    {
      id: 5, 
      img: redalgodon,
      title: "Conjunto de algodón rojo",
      brand: "Talle 90 - Agostina",
      price: 8000,
    },
    {
      id: 6, 
      img: encajymicrof,
      title: "Conjunto de encaje y microfibra",
      brand: "New sensation",
      price: 5800,
    },
    {
      id: 7, 
      img: melifera,
      title: "Conjunto talle 110",
      brand: "Melifera",
      price: 8000,
    },
  ] as const;