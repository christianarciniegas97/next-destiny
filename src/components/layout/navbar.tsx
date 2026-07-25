"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

const links = [
  { href: "/Destinos", label: "Destinos" },
  { href: "/Costos", label: "Costos y Presupuestos" },
  { href: "/Visas", label: "Visas y Requisitos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar fixed z-50 bg-indigo-950/80 backdrop-blur-md border-b border-white/5 shadow-none px-4 sm:px-8">
      <div className="flex-1">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex-none">
        <button
          className="btn btn-ghost btn-circle lg:hidden text-white/80 hover:text-white hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="menu fixed top-16 left-0 w-screen bg-indigo-950/95 backdrop-blur-md z-40 p-4 gap-1 border-b border-white/5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/Login"
                onClick={() => setIsOpen(false)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg mt-1 justify-center"
              >
                Ingresa
              </Link>
            </li>
          </ul>
        )}

        <ul className="menu menu-horizontal hidden lg:flex items-center gap-1 px-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-[14.5px] font-medium text-white/80 hover:text-white hover:bg-transparent after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/Login"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg px-5"
            >
              Ingresa
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}