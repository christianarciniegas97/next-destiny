import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/images/pin_navigation_map_destination_icon_225369.png";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white/65 pt-14 pb-7 mt-2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <Logo />
            </div>
            <p className="text-sm mt-3.5 leading-relaxed max-w-[280px]">
              Toda la información para organizar tu próximo viaje, sin abrir veinte pestañas.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-4">
              Producto
            </h4>
            <Link href="/Destinos" className="block text-sm text-white/60 hover:text-white mb-3 transition-colors">
              Destinos
            </Link>
            <Link href="/Costos" className="block text-sm text-white/60 hover:text-white mb-3 transition-colors">
              Costos y Presupuestos
            </Link>
            <Link href="/Visas" className="block text-sm text-white/60 hover:text-white mb-3 transition-colors">
              Visas y Requisitos
            </Link>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-bold tracking-widest uppercase mb-4">
              Legales
            </h4>
            <Link href="/Terminos" className="block text-sm text-white/60 hover:text-white mb-3 transition-colors">
              Términos y condiciones
            </Link>
            <Link href="/Privacidad" className="block text-sm text-white/60 hover:text-white mb-3 transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-5 text-[13px] text-white/40">
          <span>© 2026 Destiny. Todos los derechos reservados.</span>
          <span>Hecho para viajeros curiosos ✈️</span>
        </div>
      </div>
    </footer>
  );
}