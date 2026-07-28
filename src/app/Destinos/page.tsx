
import { DestinosServices } from "@/src/services/destinos.service"
import DestinationContent from "@/src/components/layout/destinationsContent";


const service = new DestinosServices() 

export default async function Destinos() {

    const destinos = await service.getAll();
    return (
    <main className="bg-slate-50/60 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-indigo-600 font-bold text-[13px] tracking-widest uppercase">
            Destinos
          </span>
          <h1 className="font-serif text-[30px] sm:text-[34px] font-medium mt-2.5">
            Explora todos los destinos
          </h1>
          <p className="text-slate-500 text-[15.5px] mt-3">
            Encuentra el país ideal para tu próximo viaje.
          </p>          
        </div>
           <DestinationContent destinies={destinos} />
      </div>
    </main>
    );
}
