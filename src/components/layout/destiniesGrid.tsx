import { Destination } from "@prisma/client";
import Card from "../ui/card";

type Props = {
    destinos : Destination[];
}

export default function DestinesGrid({ destinos } : Props) {

    return(
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">  
                        {destinos.map((destino : any) => (
                            <Card
                                key={destino.id}
                                id={destino.id}
                                alt={destino.name}
                                title={destino.name}
                                image={destino.image}
                                PricePerDay={destino.Price}
                                capital={destino.Capital}
                                visa={destino.VisaType}
                                paragraph={destino.description}
                                url={`/Destinos/${destino.name}`}
                            />
                        ))
                        } 
                    </div>
      
    )
    
}