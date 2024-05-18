"use client"

import Nav from "@/components/Nav";
import Titlesections from "@/components/Titlesections";
import Footer from "@/components/Footer";
import { products } from "./data";
import { Image } from "@nextui-org/react";



export default function Conjuntos(){
    return(
        <>
        <header>
          <Nav/>
          <Titlesections text="Conjuntos"/>
        </header>
        
        <section className="flex flex-wrap justify-center gap-2 gap-y-[100px] mx-[10px] h-auto">
                {products.map((product) => (
                    <div className='inline-block min-w-[100px] min-h-[120px] max-w-[160px] mt-8' key={product.id}>
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