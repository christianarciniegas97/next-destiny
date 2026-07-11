import Link from "next/link"
import Image from "next/image"
import icon from "../../../public/images/pin_navigation_map_destination_icon_225369.png"

export default function Navbar() {

    return(
        
        <div className="navbar bg-indigo-950 shadow-sm fixed z-10">
            <div className="flex-1">
                <Link href={"/"}>
                    <Image 
                        src={icon}
                        alt=""
                        width={100}
                        height={50}
                    />
                </Link>

            </div>
        <div className="flex-none">
                <div className="dropdown">
                <div 
                   tabIndex={1} 
                   role="button" 
                   className="btn btn-ghost lg:hidden">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"> 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                    </svg>
                    <ul  
                        className="    menu
                                dropdown-content
                                fixed
                                top-16
                                left-0
                                w-screen
                                h-[calc(100vh-4rem)]
                                bg-indigo-950
                                z-50
                                p-4">
                            <li>
                                <Link href="/Destinos">Destinos</Link>
                            </li>
                            <li>
                                <Link href="/Costos">Costos y Presupuestos</Link>
                            </li>
                            <li>
                                <Link  href="/Visas">Visas y Requisitos</Link>
                            </li>
                    </ul>
                
                </div>
            </div>
                <ul className="menu menu-horizontal hidden lg:flex px-1">
                <li>
                    <Link href="/Destinos">Destinos</Link>
                </li>
                <li>
                    <Link href="/Costos">Costos y Presupuestos</Link>
                </li>
                <li>
                    <Link  href="/Visas">Visas y Requisitos</Link>
                </li>
                </ul>
            </div>
        </div>
                                         

    )

}