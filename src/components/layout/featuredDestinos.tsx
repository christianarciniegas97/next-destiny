import Link from "next/link";

type Destination = {
  name: string;
  price: string;
  desc: string;
  href: string;
  gradient: string;
};

const destinations: Destination[] = [
  {
    name: "Tailandia",
    price: "$35/día",
    desc: "Islas turquesa, templos dorados y la comida callejera más barata del sudeste asiático.",
    href: "/Destinos/tailandia",
    gradient: "from-[#0d5c66] via-[#1c8b91] to-[#7fd8c4]",
  },
  {
    name: "Vietnam",
    price: "$28/día",
    desc: "De la Bahía de Ha Long a Hoi An: paisajes imposibles con el presupuesto más ajustado de la región.",
    href: "/Destinos/vietnam",
    gradient: "from-[#0c3d2e] via-[#1f7a5c] to-[#a9d98a]",
  },
  {
    name: "Japón",
    price: "$90/día",
    desc: "Tradición y neón conviviendo. Más caro, pero con trenes puntuales al segundo.",
    href: "/Destinos/japon",
    gradient: "from-[#3a1730] via-[#8c3a5c] to-[#f3a56b]",
  },
];

export default function FeaturedDestinations() {
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
          {destinations.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative h-48 bg-gradient-to-br ${d.gradient}`}>
                <span className="absolute top-3.5 right-3.5 bg-white/90 text-slate-800 font-bold text-[13px] px-3 py-1.5 rounded-full">
                  {d.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium">{d.name}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{d.desc}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}