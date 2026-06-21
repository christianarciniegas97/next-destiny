import Link from "next/link"
import Image from "next/image"
import icon from "../../../public/images/pin_navigation_map_destination_icon_225369.png"

export default function Navbar() {

    return(
        <div className="navbar bg-indigo-950 shadow-sm fixed">
        <div className="flex-1">
            <Link href={"/"}>
                <Image 
                    src={icon}
                    alt=""
                    width={50}
                    height={50}
                />
            </Link>

        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link  href={process.env.DESTINY_PAGE!}>Destinos</Link>
            </li>
            <li>
                <Link  href={process.env.COST!}>Costos y Presupuestos</Link>
            </li>
            <li>
                <Link  href={process.env.VISAS!}>Visas y Requisitos</Link>
            </li>
            </ul>
        </div>
        </div>
    )

}