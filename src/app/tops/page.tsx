import Footer from "@/src/components/Footer";
import Nav from "@/src/components/Nav";
import Titlesections from "@/src/components/Titlesections";
import { products } from "./data";
import { Image } from "@nextui-org/react";
import { useCallback } from 'react';


export default function Tops(){
    return(
        <>
        <header>
          <Nav/>
          <Titlesections text="Tops"/>
        </header>

        <section className="flex flex-wrap justify-center gap-2 gap-y-[50px] mx-[10px] h-auto mt-6">
                {products.map((product) => (
                    <div className='inline-block min-w-[100px] min-h-[120px] max-w-[160px] ' key={product.id}>
                         <Image 
                          className="w-full h-full rounded-md"
                          src={product.img.src}
                          alt={product.title}
                          
                          />
                        <div className="[&>p]:text-center">
                            <p className=' text-xs font-bold '>{ product.title }</p>
                            <p className=' text-xs font-medium '>{ product.brand }</p>
                            <p className=' text-xs font-light '>${ product.price }</p>
                        </div>
                    </div>
                ))}
            </section>

        <Footer/>
        </>
    )
}