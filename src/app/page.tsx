import Mainart from "@/components/Mainart";
import Nav from "@/components/Nav";
import logoresp from '../components/assets/images/hero/logoresponsive.png';
import Image from "next/image";
import Footer from "@/components/Footer";
import Carrousel from "@/components/Carrousel";
import Information from "@/components/Infomation";

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

      <Information/>

      
     <Footer/>
    </main>
  );
}
