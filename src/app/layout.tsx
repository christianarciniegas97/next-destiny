import "../globals.css"
import Navbar from  "@/src/components/layout/navbar"
import Footer from "@/src/components/layout/footer"
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Destiny — Planea tu próxima aventura",
  description: "Toda la información para organizar tu viaje, en un solo lugar.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
      </body>
    </html>
  )
}