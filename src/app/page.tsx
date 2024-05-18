import Mainart from "@/components/Mainart";
import Nav from "@/components/Nav";
import logoresp from '../components/assets/images/images/logoresponsive.png';
import Image from "next/image";
import Footer from "@/components/Footer";
import Carrousel from "@/components/Carrousel";

export default function Home() {
  return (
    <main >
      <header>
        
        <Nav/>

        <div 
          className="h-[300px] w-md md:hidden mt-[56px]">
          <Image 
          className="h-full w-full" 
          src={logoresp}                  
          alt="logo"
          //layout="fill"
          objectFit="cover"/>
        </div>

      </header>

      <Mainart/>

      <Carrousel/>
     <Footer/>
    </main>
  );
}
