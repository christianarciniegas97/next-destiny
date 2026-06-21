import Image from "next/image"
import BtnSeeMore from "./btnSeeMore"
import Link from "next/link"

type cardProps = {
    id : string ,
    image : any,
    alt : string,
    title : string,
    paragraph : string
    url : any
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

    }: cardProps ){
    return(
        <div id={id} className="card bg-base-100 w-full shadow-sm">
        <figure>
            <Image
            src={image}
            alt={alt}
            style={imageStyle}
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{paragraph}</p>
            <div className="card-actions justify-end">
                <Link  href={url}>
                       <BtnSeeMore />
                </Link>
            </div>
        </div>
        </div>

    )
}