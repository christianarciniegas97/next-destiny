type Feature = {
  title: string;
  desc: string;
  path: string;
};

const features: Feature[] = [
  {
    title: "Info actualizada",
    desc: "Datos revisados cada mes: nada de guías escritas antes de la pandemia.",
    path: "M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z M12 3a9 9 0 100 18 9 9 0 000-18z",
  },
  {
    title: "Costos reales",
    desc: "Presupuestos armados con gastos de viajeros, no estimaciones genéricas.",
    path: "M3 6h18v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6z M3 10h18 M7 15h.01",
  },
  {
    title: "Visas sin sorpresas",
    desc: "Requisitos por nacionalidad, para que no te enteres en el aeropuerto.",
    path: "M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z",
  },
  {
    title: "Rutas probadas",
    desc: "Itinerarios armados y corregidos por gente que ya los hizo.",
    path: "M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z M9 7v13 M15 4v13",
  },
];

export default function WhyDestiny() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-indigo-600 font-bold text-[13px] tracking-widest uppercase">
            ¿Por qué Destiny?
          </span>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-medium mt-2.5">
            Menos pestañas abiertas, más viaje
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F2733A"
                  strokeWidth="2"
                  className="w-5.5 h-5.5"
                >
                  <path d={f.path} />
                </svg>
              </div>
              <h3 className="font-semibold text-[17px]">{f.title}</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}