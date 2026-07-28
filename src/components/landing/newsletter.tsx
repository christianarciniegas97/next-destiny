"use client";

import { useState } from "react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 text-center">
      <div className="max-w-lg mx-auto px-6">
        <h2 className="font-serif text-[24px] sm:text-[26px] font-medium">
          No te pierdas ningún destino nuevo
        </h2>
        <p className="text-slate-500 text-[15px] mt-2.5">
          Un mail al mes con guías nuevas y bajadas de precio en vuelos.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col sm:flex-row gap-2.5 justify-center mt-6"
        >
          <input
            type="email"
            required
            placeholder="tuemail@ejemplo.com"
            className="input input-bordered rounded-xl w-full sm:w-72 focus:outline-indigo-600"
          />
          <button
            type="submit"
            className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-xl px-6 font-semibold"
          >
            {sent ? "¡Listo! ✓" : "Suscribirme"}
          </button>
        </form>
      </div>
    </section>
  );
}