import Image from "next/image"
import imagen404 from "@/public/images/404.png"
import Link from 'next/link'

 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center">    
      <Image className="w-full h-[500px] object-cover"
        src={imagen404}
        alt="pagina de error"
      >
   
    </Image>
      <Link href="/"  className="btn btn-primary mt-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" >Return Home</Link>
    </div>
  )
}