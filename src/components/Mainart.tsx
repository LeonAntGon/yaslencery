import { Saira_Condensed } from "next/font/google";
import "./assets/styles/catalog.css"
import Link from 'next/link';
import Whatsapp from "./Whatsapp";


const saira = Saira_Condensed({
    weight: "700",
    subsets:['latin'],
  })

export default function Mainart(){
    return(

    <article>
        <h1 className="pt-2 text-center robotocon text-[16px] font-bold">Categorias</h1>

        <div className='container mt-4'>
                
                    <Link href="/conjuntos">
                        <div className="cont1">
                        <h4 className={saira.className}>CONJUNTOS</h4>
                        </div>
                    </Link>
                    
                    <Link href="/tops">
                    <div className="cont2">
                        <h4 className={saira.className}>TOPS DEPORTIVOS</h4>
                    </div>
                    </Link>

                    <Link href="/bombis">
                    <div className="cont3">
                        <h4 className={saira.className}>BOMBIS</h4>
                    </div>
                    </Link>

                    <Link href="/herotico">
                    <div className="cont4">
                        <h4 className={saira.className}>HEROTICO🔥</h4>
                    </div>
                    </Link>
            </div>

            <Whatsapp/>
    </article>
    )
}