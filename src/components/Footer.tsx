import Image from 'next/image'
import insta from './assets/images/media/ig.svg'
import tiktok from './assets/images/media/tiktok.svg'

export default function Footer(){
    return(
    <footer className="mt-[30px] mb-2 text-primary-content">

        <h2 className="text-center py-4 text-[16px] font-bold">Siguenos</h2>
  <nav>
    <div className="flex justify-evenly flex-no-wrap ">
      
      
      <a 
      href='https://www.facebook.com/12345jasmin?mibextid=JRoKGi'
      className='cursor-pointer'
      ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

      <a href="http://www.instagram.com/lenceria__yas" className='cursor-pointer '>
       <Image 
       src={insta}
       alt='Instagram'
       width={24}
       height={24}/>
       </a>
      
       <a href="https://www.tiktok.com/@lenceria_yas?_t=8mSlTqCYPuX&_r=1" className='cursor-pointer'>
       <Image 
       src={tiktok}
       alt='Tik Tok'
       width={24}
       height={24}/>
       </a>
      
    </div>
  </nav>
  <p className="text-center pt-4 text-xs">Copyright © 2024 - Derechos reservados</p>
</footer>
)
}