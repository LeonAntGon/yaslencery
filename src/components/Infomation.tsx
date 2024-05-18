import { Image } from "@nextui-org/react";
import delivery  from "./assets/images/info/delivery.svg";
import support  from "./assets/images/info/cell-phone.svg";


export default function Information(){
    return(
        <section className="mt-5">

            <h3 className="text-center text-[16px] font-bold">Envios y servicios</h3>
            
            <div className="flex justify-evenly flex-nowrap mt-5">
            <div>
                <Image
                src={delivery.src}
                alt="Delivery"
                width={80}
                height={80}/>
                <h3>Envíos con cadete</h3>
            </div>

            <div>
            <Image
                className="mt-[10px]"
                src={support.src}
                alt="Delivery"
                width={70}
                height={70}/>
                <h3>Atención 24/7</h3>
            </div>
            </div>
            
        </section>
    )
}