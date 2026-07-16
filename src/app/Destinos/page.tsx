
import Card from "@/src/components/layout/card"
import { DestinosServices } from "@/src/services/destinos.service"

const service = new DestinosServices() 

export default async function Destinos() {

    const destinos = await service.getAll();

    console.log(destinos);
    return (
        <main className="p-10 bg-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {destinos.map((destino : any) => (
                    <Card
                        key={destino.id}
                        id={destino.id}
                        alt={destino.name}
                        title={destino.name}
                        image={destino.image}
                        paragraph={destino.description}
                        url={`/Destinos/${destino.name}`}
                    />
                ))
                
                }
            </div>
        </main>
    );
}