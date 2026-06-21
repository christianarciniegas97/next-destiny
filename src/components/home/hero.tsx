import Link from "next/link";

export default function Hero(){
    return(
        <div
        className="hero min-h-screen"
        style={{
            backgroundImage:
            "url(https://media.grandvoyage.com/__sized__/voyages/4_Gran_tour_por_el_sudeste_asiatico_en_20_dias-thumbnail_webp-1920x960.webp)",
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">¡Hola!</h1>
            <p className="mb-5">
                Planeando recorrer Asia desde Argentina
                guías reales, presupuestos, visas y experiencias.
            </p>
                <Link href="/Destinos">
                    <button className="btn btn-primary">
                         Guías
                    </button>
                </Link>
            </div>
        </div>
    </div>
    )
}