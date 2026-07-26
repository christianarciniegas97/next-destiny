import Link from "next/link";
import { DestinosServices } from "@/src/services/destinos.service"

const service = new DestinosServices() 

export default async function FeaturedDestinations() {

  const featuredTrue =  await service.getFeatured();

  return (
    <section id="destinos" className="py-20 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-13">
          <span className="text-indigo-600 font-bold text-[13px] tracking-widest uppercase">
            Destinos destacados
          </span>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-medium mt-2.5">
            Los viajes que están sonando ahora
          </h2>
          <p className="text-slate-500 text-[15.5px] mt-3 leading-relaxed">
            Guías completas con costos día a día, para que sepas exactamente cuánto llevar.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTrue.map((destinies : any) => (
            <Link
              key={destinies.name}
              href={`/${destinies.name}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
            <figure className="h-48 w-full overflow-hidden">
              <span className="absolute top-3.5 right-3.5 bg-white/90 text-slate-800 font-bold text-[13px] px-3 py-1.5 rounded-full">{destinies.Price}</span>
              <img className="h-full w-full object-cover"
                src={destinies.image}
                alt={destinies.name} />
            </figure>
                <div className="p-6 relative pb-16 h-full">
                  <h3 className="font-serif text-xl font-medium">{destinies.name}</h3>
                  <p 
                    title={destinies.description2} 
                    className="text-slate-500 text-sm mt-2 leading-relaxed text-justify line-clamp-3 cursor-help"
                  >
                    {destinies.description2}
                  </p>

                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-indigo-600">
                  Ver guía completa
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
           ))
          }
        </div>
      </div>
    </section>
  );
}