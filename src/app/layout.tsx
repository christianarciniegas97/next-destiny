import "../globals.css"
import Navbar from  "@/src/components/layout/navbar"
import Footer from "@/src/components/layout/footer"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
            <main className="flex-1 pt-20">
              {children}
            </main>
        <Footer /> 
      </body>
    </html>
  )
}