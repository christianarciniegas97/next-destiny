import Image from "next/image"
import Link from "next/link"

type CardProps = {
    id: string;
    image: string;
    alt: string;
    title: string;
    paragraph: string;
    url: string;
}


const imageStyle = {
  border: '1px solid #fff',
  width: '900px',
  height: '300px',
}


export default function Card ({
     id,
     image,
     alt,
     title,
     paragraph,
     url

    }: CardProps ){

    console.log("Card image:", image);    
    return(
        <div id={id} className="card bg-base-100 w-full shadow-sm">
        <figure>
            <Image
                src={image}
                alt={alt}
                width={500}
                height={400}
                style={imageStyle}
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{paragraph}</p>
            <div className="card-actions justify-end">
                <Link  href={url || "/Destinos"} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all">
                    Ver mas
                </Link>
            </div>
        </div>
        </div>

    )
}