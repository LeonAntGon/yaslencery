"use client"; 
  

import { useState } from "react"; 
import Link from 'next/link';



export default function Nav() {

    const [isDivVisible, setDivVisibility] = useState(false);

    const toggleDivVisibility = () => {
        setDivVisibility(!isDivVisible);   
      };


    return(
                
  
        <nav className="h-14 w-full bg-neutral-950 flex justify-between
                        md:h-16 md:block  
                        fixed top-0 z-10  shadow-lg">
        
            {/*Hamburguer*/ }
            <div className="mx-5 pt-5 [&>span]:h-[3px] [&>span]:rounded-[1px]
                            md:hidden cursor-pointer" onClick={toggleDivVisibility} >
                <span className="block w-6 bg-white mb-[6px]"></span>
                <span className="block w-6 bg-white mb-[6px]"></span>
                <span className="block w-6 bg-white"></span>
            </div>

            {/*Menu Lateral*/}

            <div className={`bg-neutral-950 fixed h-screen w-[200px] transition-all duration-500 ${isDivVisible ? 'translate-x-0' : 'translate-x-[-200px]'}`}>
            
            
                <button type="button" onClick={toggleDivVisibility} 
                     className=" rounded-md p-2 inline-flex items-center justify-center text-gray-100  focus:outline-none
                     float-right pt-3"> 
                <svg className="h-[40px] w-[40px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="6 0 16 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>


                <div className="grid grid-rows-2 gap-2 pt-[68px] pl-6">

                    <div className='pb-2'>
                        <Link href="/"><p onClick={toggleDivVisibility} className='text-white text-xs hover:text-red-200'>INICIO</p></Link>
                    </div>
                        
                    <div className='pb-2'>
                        <Link href="/conjuntos"><p onClick={toggleDivVisibility} className='text-white text-xs hover:text-red-200'>CONJUNTOS</p></Link>
                    </div>
                    <div className='pb-2'>
                        <Link href="/tops"><p onClick={toggleDivVisibility} className='text-white text-xs hover:text-red-200'>TOP DEPORTIVOS</p></Link>
                    </div>
                    <div className='pb-2'>
                        <Link href="/bombis"><p onClick={toggleDivVisibility} className='text-white text-xs hover:text-red-200'>BOMBIS</p></Link>
                    </div>
                    <div className='pb-2'>
                        <Link href="/herotico"><p onClick={toggleDivVisibility} className='text-white text-xs hover:text-red-200'>HEROTICO</p></Link>
                    </div>
                        
                    </div>


            </div>

            {/*Header >= 768 con Titulo*/}
            <div className="inline-block float-right p-4
                            md:float-none md:text-center md:flex md:justify-around ">

                <div className='hidden md:flex'>
                    
                    <div>
                        <Link href="/"><p className='text-white  pr-2 lg:pr-5 text-base font-stylish '>Inicio</p> </Link>
                    </div>
                    <div>
                        <Link href="/nosotros"><p className='text-white text-base font-stylish'>Conjuntos</p></Link>
                    </div>
                </div>


                
            </div>

            {/*Social Media*/ }
            
        </nav>
        

    );
};