import Link from "next/link"

type CardProps = {
    id: string;
    image: string;
    alt: string;
    title: string;
    PricePerDay : string;
    capital : string;
    visa : string
    paragraph: string;
    url: string;
}

export default function Card ({
     id,
     image,
     alt,
     title,
     capital,
     PricePerDay,
     visa,
     paragraph,
     url

    }: CardProps ){
 
    return(
        <div id={id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
        <figure className="h-48 w-full overflow-hidden">
              <img className="h-full w-full object-cover"
                src={image}
                alt={alt} />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-slate-900">{title}</h2>
            <div>
                    <div className="flex flex-wrap gap-1.5">
                        {[
                            { field: "price", value: `Precio por dia: ${PricePerDay}` },
                            { field: "capital", value: capital },
                            { field: "visa", value: `Requisitos: ${visa}` },
                        ].map((item) => (
                            <span key={item.field} className="bg-slate-100 text-slate-600 rounded-full px-2.5 py-1 text-xs">
                                {item.value}
                            </span>
                        ))}
                    </div>
            </div>
            <p title={paragraph}
                className="text-slate-500 text-sm mt-2 leading-relaxed text-justify line-clamp-3 cursor-help"
            >{paragraph}</p>
            <div className="card-actions justify-end">
                <Link  href={url || "/Destinos"} className="text-indigo-600 font-semibold text-sm group-hover:translate-x-1">
                    Explorar →
                </Link>
            </div>
        </div>
        </div>

    )
}