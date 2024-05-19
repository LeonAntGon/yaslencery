import Footer from "@/src/components/Footer";
import Nav from "@/src/components/Nav";
import Titlesections from "@/src/components/Titlesections";

export default function Herotico(){
    return(
        <>
        <header>
          <Nav/>
          <Titlesections text="Nenas"/>
        </header>
        <Footer/>
        </>
    )
}