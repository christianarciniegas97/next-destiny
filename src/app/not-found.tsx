import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(ellipse_at_15%_0%,#23225a_0%,transparent_55%),radial-gradient(ellipse_at_85%_15%,#1a3a52_0%,transparent_50%),linear-gradient(180deg,#14132B_0%,#0F1730_55%,#0C1220_100%)] min-h-screen flex items-center justify-center px-6 py-20">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-md mx-auto text-center">
        <svg viewBox="0 0 72 72" className="w-16 h-16 mx-auto mb-5">
          <circle cx="36" cy="36" r="34" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <circle cx="36" cy="36" r="3" fill="#F2733A" />
          <path d="M36 36 L50 20" stroke="#F2733A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 36 L26 46" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="36" cy="10" r="1.5" fill="rgba(255,255,255,0.5)" />
          <circle cx="36" cy="62" r="1.5" fill="rgba(255,255,255,0.5)" />
          <circle cx="10" cy="36" r="1.5" fill="rgba(255,255,255,0.5)" />
          <circle cx="62" cy="36" r="1.5" fill="rgba(255,255,255,0.5)" />
        </svg>

        <p className="font-serif text-white text-[56px] sm:text-[64px] font-medium leading-none mb-1.5">
          404
        </p>
        <h1 className="font-serif text-white text-xl sm:text-[22px] font-medium mb-2.5">
          Este destino no existe
        </h1>
        <p className="text-white/60 text-[14.5px] leading-relaxed mb-8">
          Parece que la ruta se perdió en el camino. Puede que el link esté roto o que el
          destino todavía no esté en el mapa.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl"
          >
            Volver al inicio
          </Link>
          <Link
            href="/Destinos"
            className="border border-white/25 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-xl"
          >
            Explorar destinos
          </Link>
        </div>
      </div>
    </main>
  );
}