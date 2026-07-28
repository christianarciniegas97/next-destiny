import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_15%_0%,#23225a_0%,transparent_55%),radial-gradient(ellipse_at_85%_15%,#1a3a52_0%,transparent_50%),linear-gradient(180deg,#14132B_0%,#0F1730_55%,#0C1220_100%)] pt-40 pb-24">
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-orange-200 px-5 py-2 rounded-full text-[13.5px] font-semibold backdrop-blur-sm">
          🌏 Planea tu próxima aventura
        </span>

        <h1 className="font-serif text-white text-[32px] sm:text-[44px] leading-[1.15] font-medium mt-7">
          Toda la información para organizar tu viaje,
          <br className="hidden sm:block" /> <span className="text-orange-400">en un solo lugar.</span>
        </h1>

        <p className="text-white/65 text-[16px] sm:text-[17px] mt-5 leading-relaxed max-w-xl mx-auto">
          Costos reales, visas sin sorpresas y rutas probadas por viajeros — todo lo que
          necesitás antes de hacer las valijas.
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center mt-9">
          <Link
            href="/Destinos"
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-xl px-7 font-semibold"
          >
            Explorar destinos
          </Link>
          <Link
            href="/Login"
            className="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/30 rounded-xl px-7 font-semibold"
          >
            Crear una cuenta
          </Link>
        </div>

        {/* signature: flight path connecting the three headline destinations */}
        <div className="relative max-w-xl mx-auto mt-14 h-[70px]">
          <svg viewBox="0 0 640 70" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            <path
              d="M20,55 Q170,-10 320,45 T620,50"
              fill="none"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />
            <circle cx="20" cy="55" r="4" fill="#F2733A" />
            <circle cx="320" cy="45" r="4" fill="#F2733A" />
            <circle cx="620" cy="50" r="4" fill="#F2733A" />
          </svg>
          <span className="absolute top-10 left-0 text-[12px] font-semibold text-white/50 tracking-wide">
            America
          </span>
          <span className="absolute top-10 left-[47%] text-[12px] font-semibold text-white/50 tracking-wide">
            Europa
          </span>
          <span className="absolute top-10 right-0 text-[12px] font-semibold text-white/50 tracking-wide">
            Asia
          </span>
        </div>
      </div>
    </section>
  );
}